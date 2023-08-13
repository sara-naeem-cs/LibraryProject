document.addEventListener('DOMContentLoaded', () => {
    //Getting information to add to the library 
    const newName = document.getElementById("book-title")
    const newAuthor = document.getElementById("book-author")
    const newPages = document.getElementById("pages")
    const submitButton = document.getElementById("submit")
    const bookContainter = document.getElementById("book-holder");



    let myLibrary = [];
    const book1 = new Book("title1", "author1", 4, true)
    const book2 = new Book("title2", "author1", 8, true)
    const book3 = new Book("title3", "author1", 12, true)

    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);

    //Constructor
    function Book(title, author, numPages, read) {
        this.title = title
        this.author = author
        this.numPages = numPages
        this.read = read
    }

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    function printBooks(){
        for (var i = 0; i < myLibrary.length; i++) {
            console.log(myLibrary[i]);
          }
    }

    function showBooks(){
        //document.querySelectorAll(".book").forEach(book => book.remove());
        //myLibrary.forEach(() => {
        let newContent = `<div class="book">
                        <h4>${newName.value}</h4>
                        <p>${newAuthor.value}</p>
                        <p>${newPages.value}</p>
                        </div>`;
        bookContainter.insertAdjacentHTML("afterend", newContent);

       // });
    }

    submitButton.addEventListener('click', (event) => {
        //greetingOutput.innerText = `Hello ${name.value}`;
        //When button is clicked we add a new object to the list
        event.preventDefault();
        console.log(newName.value);
        console.log(newAuthor.value);
        console.log(newPages.value);
        const book = new Book(newName.value, newAuthor.value, newPages.value, true);
        addBookToLibrary(book)
        showBooks();

        //console.log(myLibrary);
        //console.log(myLibrary[3])

    })

    //************************************************* */



    function main(){

    }
    main();    
})

