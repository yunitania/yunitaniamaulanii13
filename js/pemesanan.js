function pemesanan() {
  var nama = document.getElementById("namapemesan").value;
  var email = document.getElementById("emailpemesan").value;
  var date = document.getElementById("datepemesan").value;
  var tujuan = document.getElementById("tujuan").value;

  let _data = {
    nama_lengkap: nama,
    email: email,
    notelp: "-",
    keberangkatan: date,
    tujuan: tujuan,
  };

  fetch("https://63dafa7be4158e02f3141efd.mockapi.io/travel/pemesanan", {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => console.log(response));
  alert("Pemesanan Berhasil");
}
