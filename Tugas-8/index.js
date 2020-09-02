// di index.js
var readBooks = require('./callback.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// versi Synchronous 
iterasi = 0;
var time = 10000;

var fc = function (sisaWaktu) {
    if (sisaWaktu > 0 && iterasi++ < (books.length - 1)) {
        readBooks(sisaWaktu, books[iterasi], fc);
    }
};

readBooks (time, books[iterasi], fc);