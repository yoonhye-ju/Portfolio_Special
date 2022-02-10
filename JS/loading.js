function move() {
  location.href = "main.html";
}
setTimeout("move()", 6000, function () {

  var test = $('body');
  test.animate('opacity', '0', 10000);
  test.animate('opacity', '1', 1000);
});