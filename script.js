setInterval(function () {
  var time = new Date();
  var day = time.getUTCDate();
  var month = time.getUTCMonth();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  var myWatch = $("#watch-time");
  var myDay = $("#watch-day");
  var myMonth = $("#watch-month");

  myWatch.html(hour + ":" + minute + ":" + second);
  myDay.html(day);
  myMonth.html(month + 1);
}, 1000);
setInterval(function () {
  var myBeat = $("#watch-beat");
  const random = (min, max) => Math.random() * (max - min) + min;
  var font = random(1, 2).toFixed(1);
  myBeat.css("transform", "scale(" + font + ")");
}, 100);
setInterval(function () {
  var beat = Math.round(Math.random() * 10);
  var myBeat = $("#watch-beat");
  myBeat.html(60 + beat);
}, 5000);
function changeColors(color) {
  var watch = $("#watch-img");
  watch.attr("src", "./" + color);
}
function changeTheme(theme) {
  var container = $(".container");
  var title = $(".title");
  var labelColors = $(".label-colors");
  var colors = $("#colors");
  var themes = $("#theme");
  colors.css({
    "background-color": "var(--" + theme + "-background)",
    "color": "var(--" + theme + "-text)",
  });
  themes.css({
    "background-color": "var(--" + theme + "-background)",
    "color": "var(--" + theme + "-text)",
  });
  container.css("background-color","var(--" + theme + "-background)");
  title.css("color","var(--" + theme + "-text)");
labelColors.css("color","var(--" + theme + "-text)"); 
}
