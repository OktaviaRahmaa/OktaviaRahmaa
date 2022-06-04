const { handler } = require ("@hapi/hapi/lib/cors");
const { 
    addBookHandler, 
    getAllBooksHandler, 
    getBookByIdHandler, 
    editBookByIdHandler, 
    deleteBookByIdHandler 
} = require('./handler');

const routes = [
    // Menyimpan Buku
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    // Menampilkan Seluruh Buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    // Menampilkan Detail Buku
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    // Mengubah Data Buku
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },
    // Menghapus Buku
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;