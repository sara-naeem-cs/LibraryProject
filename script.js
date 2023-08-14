document.addEventListener('DOMContentLoaded', () => {
    //Getting information to add to the library 
    const newName = document.getElementById("book-title")
    const newAuthor = document.getElementById("book-author")
    const newPages = document.getElementById("pages")
    const submitButton = document.getElementById("submit")
    const bookContainter = document.getElementById("book-holder");
    const deleteButtons = document.querySelectorAll(".delete"); 
    const openFormBtn = document.getElementById('addBookBtn');
    const closeFormBtn = document.getElementById("close-btn");




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
        let newContent = `<div class="book" data-book="${myLibrary.length}">
                        <button class="delete"><span class="text">&times;</span></button>
                        <h4>${newName.value}</h4>
                        <p>${newAuthor.value}</p>
                        <p>${newPages.value}</p>
                        <button class="read"><span class="text">Read</span></button>
                        </div>`;
        bookContainter.insertAdjacentHTML("beforeend", newContent);
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(newName.value);
        console.log(newAuthor.value);
        console.log(newPages.value);
        const book = new Book(newName.value, newAuthor.value, newPages.value, true);
        showBooks();
        addBookToLibrary(book)
    });
  
  deleteButtons.forEach(book=> {
    book.addEventListener("click", function(e) {
            const clickedBook = e.target.parentElement.parentElement;
            var index = clickedBook.getAttribute('data-type');
              
            clickedBook.remove();
            //Need to remove the specific book from the array:
            console.log(myLibrary);
            myLibrary.splice(parseInt(index), 1);
            console.log(myLibrary);
      });
  }); 

  
openFormBtn.addEventListener('click', () => { 
  const form = document.getElementById('myForm');
  if (form.style.display === 'none') {
    form.style.display = 'block';
    openFormBtn.style.display = 'none';
  } else {
    form.style.display = 'none';
    openFormBtn.style.display = 'block';
  } 
});

  closeFormBtn.addEventListener('click', () =>{
     const form = document.getElementById('myForm');
    form.style.display = 'none';
    openFormBtn.style.display = 'block';
  })
  
    //************************************************* */



    function main(){

    }
    main();   
})
