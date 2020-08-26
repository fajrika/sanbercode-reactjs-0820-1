// soal 1
console.log("Soal 1 : ");
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(
    `${kataPertama} ${
        kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)
    } ${kataKetiga} ${kataKeempat.toUpperCase()}`
);

// soal 2
console.log("Soal 2 : ");
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(
    parseInt(kataPertama) +
        parseInt(kataKedua) +
        parseInt(kataKetiga) +
        parseInt(kataKeempat)
);

// soal 3
console.log("Soal 3 : ");
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
// yg gini mnrt saya lebih simple pke split
var kataKedua = kalimat.split(" ")[1];
var kataKetiga = kalimat.split(" ")[2];
var kataKeempat = kalimat.split(" ")[3];
var kataKelima = kalimat.split(" ")[4];

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// soal 4
console.log("Soal 4 : ");
var nilai;
nilai = 75;
if (nilai >= 80) console.log("indeksnya A");
else if (nilai >= 70) console.log("indeksnya B");
else if (nilai >= 60) console.log("indeksnya C");
else if (nilai >= 50) console.log("indeksnya D");
else if (nilai >= 0) console.log("indeksnya E");
else console.log("Error");

// soal 5
console.log("Soal 5 : ");

var tanggal = 22;
var bulan = 8;
var tahun = 1996;

var date = tanggal + " ";
switch (bulan) {
    case 1:
        date += "Januari";
        break;
    case 2:
        date += "Februari";
        break;
    case 3:
        date += "Maret";
        break;
    case 4:
        date += "April";
        break;
    case 5:
        date += "Mei";
        break;
    case 6:
        date += "Juni";
        break;
    case 7:
        date += "Juli";
        break;
    case 8:
        date += "Agustus";
        break;
    case 9:
        date += "September";
        break;
    case 10:
        date += "Oktober";
        break;
    case 11:
        date += "November";
        break;
    case 12:
        date += "Desember";
        break;
    default:
        date += "Null";
        break;
}
date += " " + tahun;
console.log(date);
