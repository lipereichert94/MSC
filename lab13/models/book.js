let books = [
    { id: 1, title: 'Statistics.js', ISBN: '199', publishedDate: '2030 / 12 / 12', author: 'Good' },
    { id: 2, title: 'Big Data.js', ISBN: '200', publishedDate: '2030 / 12 / 12', author: 'Good' },
    { id: 3, title: 'Rio & Kyoto PROTOCOL.js', ISBN: '201', publishedDate: '2030 / 12 / 12', author: 'Good' }
];
let idCounter = 4;

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getBookById(id) {
        const bo = books.find(p => p.id === id);
        console.log(bo);
        if (bo) {
            return bo;
        } else {
            throw new Error(`No book found with Id: ${id}`);
        }
    }

    save() {
        this.id = idCounter++;
        books.push(this);
        return this;
    }

    static deleteById(id) {
        const index = books.findIndex(p => p.id === id);
        if (index > -1) {
            // products = products.filter(p => p.id !== id);
            const temp = books[index];
            books.splice(index, 1);
            return temp;
        } else {
            throw new Error(`No book found with Id: ${id}`);
        }
    }

    update(id) {
        const index = books.findIndex(p => p.id === id);
        if (index > -1) {
            this.id = id;
            books[index] = this;
        } else {
            throw new Error(`No book found with Id: ${id}`);
        }
    }

}
