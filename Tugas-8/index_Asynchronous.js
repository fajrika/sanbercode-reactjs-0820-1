// di index.js
var readBooks = require('./callback.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// versi Asynchronous 

var time = 10000;
books.forEach(book => {
    readBooks(time, book,
        function (sisaWaktu) {
            if (sisaWaktu > 0)
                time = sisaWaktu; // 7000
            else
                return 0;
        }
    );
});