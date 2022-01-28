var status_s = "Editor Status:";
var status_b = False;
var url = "";

if (status_b == False) {
  var status_t = "Enabled";
}
else {
  var status_t = "Disabled";
}

function status() {
  document.getElementByID("status") = status_s+" "+status_t;
}

function openpage() {
  open(url);
}
