// Soal 1

halo = () => {
    return "Halo Sanbers!";
};

console.log(halo()); // "Halo Sanbers!"

// Soal 2

kalikan = (num1, num2) => {
    return num1 * num2;
};

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

// soal 3

introduce = (name, age, address, hobby) => {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
};
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

// soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objectDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    "jenis kelamin": arrayDaftarPeserta[1], //ini bakalan susah dalam pemanggilan //sesuai soal
    hobby: arrayDaftarPeserta[2],
    tahun: arrayDaftarPeserta[3],
};
console.log(objectDaftarPeserta);

// soal 5
var objectInArray = [
    {
        nama: "strawberry",
        warna: "merah",
        "ada bijinya": "tidak",
        harga: "9000",
    },
    {
        nama: "jeruk",
        warna: "oranye",
        "ada bijinya": "ada",
        harga: "8000",
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "ada",
        harga: "10000",
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: "5000",
    },
];
console.log(objectInArray[0]);

// soal 6

addFilm = (dataFilm, nama, durasi, genre, tahun) => {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun,
    });
};

var dataFilm = [];
addFilm(dataFilm, "God of Highschool", "30", "Laki-laki", "2020");
addFilm(dataFilm, "God of Highschool2", "40", "Laki-laki", "2021");
console.log(dataFilm);
