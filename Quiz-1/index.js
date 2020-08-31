lingkaran = (r) =>
    r % 7 === 0 ? Math.pow(r, 2) * (22 / 7) : Math.PI * Math.pow(r, 2);

segitiga = (p, t) => (p * t) / 2;

luasPersegi = (s) => Math.pow(s, 2);

console.log(lingkaran(7));
console.log(segitiga(3, 6));
console.log(luasPersegi(4));

var daftarAlatTulis = [
    "2. Pensil",
    "5. Penghapus",
    "3. Pulpen",
    "4. Penggaris",
    "1. Buku",
];

daftarAlatTulis.sort();
console.log("output");
let i = 0;
while (daftarAlatTulis[i]) {
    console.log(daftarAlatTulis[i]);
    i++;
}

var pesertaLomba = [
    ["Budi", "Pria", "172cm"],
    ["Susi", "Wanita", "162cm"],
    ["Lala", "Wanita", "155cm"],
    ["Agung", "Pria", "175cm"],
];

console.log(
    pesertaLomba.map((el) => {
        return {
            nama: el[0],
            jenisKelamin: el[1],
            tinggi: el[2],
        };
    })
);

// 15
var daftarNama = [];

tambahNama = (nama, jenisKelamin) => {
    daftarNama.push({
        nama: nama,
        jenisKelamin: jenisKelamin,
        panggilan:
            jenisKelamin == "laki-laki"
                ? "Bapak"
                : jenisKelamin == "perempuan"
                ? "Ibu"
                : "",
    });
};

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

for ([i, daftar] of daftarNama.entries())
    console.log(`${i + 1}. ${daftar.panggilan} ${daftar.nama}`);
