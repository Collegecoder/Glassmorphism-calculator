$('.cell-undo').on('click', function() {
  userRequest = userRequest.slice(0, -1);
  $('.cell-top').text(userRequest);
});