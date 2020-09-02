var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise

//versi Synchronous

function dev(time, iterasi, books) {
    var pr = readBooksPromise(time, books[iterasi]);

    pr.then(function (sisaWaktu) {
        iterasi++;
        if ((sisaWaktu > 0) && (iterasi < (books.length)))
            dev(sisaWaktu, iterasi, books);
    }).catch(function (sisaWaktu) {
        return 0;
    })
}

dev(10000, 0, books);