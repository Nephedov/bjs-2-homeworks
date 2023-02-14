class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state *= 1.5;
        this.state = this._state;
    }

    set state (value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else this._state = value;
    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;

    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(element => element[type] === value) ? this.books.find(element => element[type] === value) : null;
    }

    giveBookByName(bookName) {
        let book = this.books.find(element => element.name === bookName);
        this.books = this.books.filter(element => element.name !== bookName);
        return book ? book : null;
    }
}

let myLibrary = new Library("Моя библиотека");
let novel = new NovelBook("Автор новеллы", "Название новеллы", 1919, 100);
let fantastic = new FantasticBook("Автор фантастики", "Название фантастики", 1918, 99);
let detective = new DetectiveBook("Автор детектива", "Название детектива", 1917, 98);
myLibrary.addBook(novel);
myLibrary.addBook(fantastic);
myLibrary.addBook(detective);
myLibrary.findBookBy("releaseDate", 1919);
myLibrary.giveBookByName("Название фантастики");
detective.state = 70;
detective.fix();
myLibrary.addBook(detective);

class Student {
    constructor(name) {
    this.name = name,
    this.marks = {};
    }

    addMark(mark, subject) {
        if(mark < 2 || mark > 5) {
            return;
        }
        if(!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if(!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        return this.marks[subject].reduce((averageBySubject, element, index, arrayOfSubjectsMarks) => averageBySubject + element / arrayOfSubjectsMarks.length, 0);
    }

    getAverage() {
        let average = 0;
        for (let subject of Object.keys(this.marks)) {
            average += this.getAverageBySubject(subject);
        }
        return average / Object.keys(this.marks).length;
    }
}