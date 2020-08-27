// soal 1
console.log("\nSoal 1");
flag = true;
i = 1;
while (i > 0) {
    if (flag) {
        if (i == 1) console.log("LOOPING PERTAMA");
        else if (i % 2 == 0) console.log(i + " - I love coding");
        if (i == 20) flag = false;
        i++;
    } else {
        if (i > 20) console.log("LOOPING KEDUA");
        else if (i % 2 == 0) console.log(i + " - I will become web developer");
        i--;
    }
}

// soal 2
console.log("\nSoal 2");

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0)
        console.log(`${i} - ${i % 3 == 0 ? "I Love Coding" : "Santai"}`);
    // console.log(i + " " + (i % 3 == 0) ? "I Love Coding" : "Santai");
    else console.log(`${i} - Berkualitas`);
}

// soal 3
console.log("\nSoal 3");

for (let i = 1; i <= 7; i++) console.log("#".repeat(i));

// soal 4
console.log("\nSoal 4");

var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

// soal 5
console.log("\nSoal 5");

var daftarBuah = [
    "2. Apel",
    "5. Jeruk",
    "3. Anggur",
    "4. Semangka",
    "1. Mangga",
];
console.log(daftarBuah.sort());
