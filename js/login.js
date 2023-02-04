var data;

$(document).ready(function () {
  var administrator;

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    "GET",
    "https://63dafa7be4158e02f3141efd.mockapi.io/travel/administrator",
    false
  );
  xmlHttp.send(null);
  var api = xmlHttp.responseText;

  administrator = JSON.parse(api);
  data = administrator[0];
});

function validasi() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == data.email && password == data.password) {
    return true;
  } else {
    alert("Email password salah!");
    return false;
  }
}
