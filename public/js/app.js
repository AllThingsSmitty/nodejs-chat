function getName() {
  var name = window.names[Math.floor(Math.random() * window.names.length)];

  var tokens = name.split(',');

  if (tokens.length > 1) {
    return $.trim(tokens[1]) + ' ' + $.trim(tokens[0]);
  }

  return name;
}

function escaped(s) {
  return $('<div></div>').html(s).html();
}

function searchUrlFor(name) {
  return 'https://www.google.com/search?q=' + encodeURIComponent(name) + '%20site:wikipedia.org&btnI=3564';
}

var name = getName();

$('#data').attr('placeholder', 'Send message as ' + name);

var socket = io.connect('/');

// on connection to server, ask for user's name with an anonymous callback
socket.on('connect', function () {
  // call the server-side function 'adduser' and send one parameter (value of prompt)
  socket.emit('adduser', name);
});

// listener, whenever the server emits 'updatechat', this updates the chat body
socket.on('updatechat', function (username, data) {
  $('#conversation').append('<b>' + escaped(username) + ':</b> ' + escaped(data) + '<br>');
});

// listener, whenever the server emits 'updateusers', this updates the username list
socket.on('updateusers', function (data) {
  $('#users').empty();
  $.each(data, function (key, value) {
    $('#users').append('<div><a href="' + searchUrlFor(key) + '" target="_blank">' + key + '</div>');
  });
});

socket.on('servernotification', function (data) {
  var searchUrl = searchUrlFor(data.username);

  if (data.connected) {
    if (data.toSelf) data.username = 'you';
    $('#conversation').append('<div class="alert alert-success" role="alert"><b>Connected:</b> <a href="' + searchUrl + '" target="_blank">' + escaped(data.username) + '</a></div>');
  } else {
    $('#conversation').append('<div class="alert alert-danger" role="alert"><b>Disconnected:</b> <a href="' + searchUrl + '" target="_blank">' + escaped(data.username) + '</a></div>');
  }
});

// on load of page
$(function () {
  // when the client hits ENTER on their keyboard
  $('#data').keypress(function (e) {
    if (e.which == 13) {
      var message = $('#data').val();
      $('#data').val('');
      // tell server to execute 'sendchat' and send along one parameter
      socket.emit('sendchat', message);
    }
  });
});
