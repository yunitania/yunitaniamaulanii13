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
  document.getElementById("nama").value = data.nama;
  document.getElementById("email").value = data.email;
  document.getElementById("password").value = data.password;
});

function ubahProfil() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;

  let _data = {
    nama: nama,
    email: email,
    password: pwd,
  };

  fetch("https://63dafa7be4158e02f3141efd.mockapi.io/travel/administrator/1", {
    method: "PUT",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => console.log(response));
  alert("Ubah Profil Berhasil");
}
