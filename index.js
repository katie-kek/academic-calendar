var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("<b>good morning!</b>");
}
if (time > 12) {
  document.write("<b>good evening!</b>");
}
if (time == 12) {
  document.write("<b>good afternoon!</b>")
}