var list;
$(document).ready(function () {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    "GET",
    "https://63dafa7be4158e02f3141efd.mockapi.io/travel/pemesanan",
    false
  );
  xmlHttp.send(null);
  var json = xmlHttp.responseText;
  list = JSON.parse(json);
  list.forEach(function (value, i) {
    var table = document.getElementById("table");
    table.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${value.nama_lengkap}</td>
            <td>${value.email}</td>
            <td>${value.tujuan}</td>
            <td>${value.keberangkatan}</td>
            <td>
        <button class="btn btn-sm btn-success" onclick="edits(${value.id})">
            <i class="fa fa-edit"></i>
        </button>
        <button class="btn btn-sm btn-danger" onclick="deletes(${value.id})">
        <i class="fa fa-trash"></i>
    </button>
        </td>
        </tr>`;
  });
});

function edits(id) {
  var oneData;
  list.forEach(function (value, i) {
    if (value.id == id) {
      oneData = value;
    }
  });
  jQuery.noConflict();
  $("#editModal").modal("show");
  document.getElementById("id").value = oneData.id;
  document.getElementById("namapemesan").value = oneData.nama_lengkap;
  document.getElementById("emailpemesan").value = oneData.email;
  document.getElementById("datepemesan").value = oneData.keberangkatan;
  document.getElementById("tujuan").value = oneData.tujuan;
}

function processEdit() {
  var id = document.getElementById("id").value;
  var nama = document.getElementById("namapemesan").value;
  var email = document.getElementById("emailpemesan").value;
  var keberangkatan = document.getElementById("datepemesan").value;
  var tujuan = document.getElementById("tujuan").value;

  let _data = {
    nama_lengkap: nama,
    email: email,
    notelp: "-",
    keberangkatan: keberangkatan,
    tujuan: tujuan,
  };

  fetch("https://63dafa7be4158e02f3141efd.mockapi.io/travel/pemesanan/" + id, {
    method: "PUT",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => console.log(response));
  window.location.reload();
  alert("Edit Berhasil");
}

function deletes(id) {
  fetch("https://63dafa7be4158e02f3141efd.mockapi.io/travel/pemesanan/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
  alert("Hapus berhasil");
  window.location.reload();
}
