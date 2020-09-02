var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise

// versi Asynchronous 
var time = 10000;
books.forEach(book => {
    var pr = readBooksPromise(time, book);
    pr.then(function (sisaWaktu) {
        if (sisaWaktu > 0) {
            //nothing
        }
    }).catch(function (sisaWaktu) {
        return 0;
    })
});