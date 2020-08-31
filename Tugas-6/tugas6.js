// soal tambahKata(1)
const luasLingkaran = (r) =>
    r % 7 === 0 ? Math.pow(r, 2) * (22 / 7) : Math.PI * Math.pow(r, 2);
const kelilingLingkaran = (r) =>
    r % 7 === 0 ? 2 * r * (22 / 7) : Math.PI * r * 2;

let contohLuas = luasLingkaran(7);
let contohKeliling = kelilingLingkaran(7);
console.log(contohLuas);
console.log(contohKeliling);

// soal 2

let kalimat = "";

const tambahKata = (kata) =>
    (kalimat = kalimat == "" ? kata : `${kalimat} ${kata}`);

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");

console.log(kalimat);

// soal 3

const newFunction = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: () => {
            console.log(firstName + " " + lastName);
            return;
        },
    };
};
//Driver Code
newFunction("William", "Imoh").fullName();

// soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!",
};
let { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

//Driver Code
console.log(combined);
