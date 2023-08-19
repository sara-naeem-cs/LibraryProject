document.addEventListener('DOMContentLoaded', () => {
  //Getting information to add to the library 
  const newName = document.getElementById("book-title")
  const newAuthor = document.getElementById("book-author")
  const newPages = document.getElementById("pages")
  const submitButton = document.getElementById("submit")
  const bookContainter = document.getElementById("book-holder");
  let deleteButtons = document.querySelectorAll(".delete");
  const openFormBtn = document.getElementById('addBookBtn');
  const closeFormBtn = document.getElementById("close-btn");




  let myLibrary = [];
  const book1 = new Book("Percy Jackson", "Rick Riordan", 350, true)
  const book2 = new Book("Harry Potter", "J. K. Rowling", 500, true)
  const book3 = new Book("Hunger Games", "Suzanne Collins", 300, false)

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

  function printBooks() {
    for (var i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);
    }
  }

  function removeBooks() {
    document.querySelectorAll(".book").forEach(book => book.remove());
  }

  function showAllBooks() {
    removeBooks();
    let i = 0;
    myLibrary.forEach((book, i) => {
      let status = "unchecked";
      if (book.read) {
        status = "checked";
      }


      let newContent = `<div class="book" data-book="${i}">
                        <button class="delete"><span class="text">&times;</span></button>
                        <h4>${book.title}</h4>
                        <p>${book.author}</p>
                        <p>${book.numPages}</p>
                       
												<label for="existing-book-status">Read</label>
                        <input type="checkbox" id="existing-book-status" name="read" value="read" ${status}>    
                        </div>`;
 
      bookContainter.insertAdjacentHTML("beforeend", newContent);
            
      
      
      
    });
    
    deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((deleteButton) => {
       deleteButton.addEventListener("click", handleClick);
    });  

  }


  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(newName.value);
    console.log(newAuthor.value);
    console.log(newPages.value);
    let book_status = true;
    if (document.getElementById("book-status").checked) {
      book_status = true;
    } else {
      book_status = false;
    }

    const book = new Book(newName.value, newAuthor.value, newPages.value, book_status);
    addBookToLibrary(book)
    showAllBooks();
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

  closeFormBtn.addEventListener('click', () => {
    const form = document.getElementById('myForm');
    form.style.display = 'none';
    openFormBtn.style.display = 'block';
  })
  
  

    
  const handleClick = (event) => {
    
    //console.log("helo");
    let index = event.target.parentNode.parentNode.getAttribute("data-book");
    //We delete this from the library and then re-render everything 
    console.log("hello",index);
    myLibrary.splice(parseInt(index), 1);
    showAllBooks();
  }



  Window.onload = showAllBooks();

  function main() {

  }
  main();
})
