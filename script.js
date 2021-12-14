setInterval(function () {
  var time = new Date();
  var day = time.getUTCDate();
  var month = time.getUTCMonth();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  var myWatch = document.getElementById("watch-time");
  var myDay = document.getElementById("watch-day");
  var myMonth = document.getElementById("watch-month");

  myWatch.innerHTML = hour + ":" + minute + ":" + second;
  myDay.innerHTML = day;
  myMonth.innerHTML = month + 1;
}, 1000);
setInterval(function () {
  var myBeat = document.getElementById("watch-beat");
  const random = (min, max) => Math.random() * (max - min) + min;
  var font = random(1, 2).toFixed(1);
  myBeat.setAttribute("style", "transform: scale(" + font + ")");
}, 100);
setInterval(function () {
  var beat = Math.round(Math.random() * 10);
  var myBeat = document.getElementById("watch-beat");
  myBeat.innerHTML = 60 + beat;
}, 5000);
function changeColors(color) {
  var watch = document.getElementById("watch-img");
  watch.setAttribute("src", "./" + color);
}
function changeTheme(theme) {
  var container = document.getElementsByClassName("container")[0];
  var title = document.getElementsByClassName("title")[0];
  var labelColors = document.getElementsByClassName("label-colors");
  var colors = document.getElementById("colors");
  var themes = document.getElementById("theme");
  colors.style.backgroundColor = "var(--" + theme + "-background)";
  colors.style.color = "var(--" + theme + "-text)";
  themes.style.backgroundColor = "var(--" + theme + "-background)";
  themes.style.color = "var(--" + theme + "-text)";
  container.style.backgroundColor = "var(--" + theme + "-background)";
  title.style.color = "var(--" + theme + "-text)";
  for (var i = 0; i < labelColors.length; i++) {
    labelColors[i].style.color = "var(--" + theme + "-text)";
  }
}
