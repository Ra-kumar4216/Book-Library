let books = [];

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;

    if (title && author) {
        const book = { id: Date.now(), title, author, category };
        books.push(book);
        displayBooks(books);
        clearInputs();
    } else {
        alert("Please fill all details");
    }
}

function displayBooks(bookArray) {
    const list = document.getElementById('bookList');
    list.innerHTML = "";

    bookArray.forEach(book => {
        const row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td><button class="delete-btn" onclick="deleteBook(${book.id})">Delete</button></td>
        </tr>`;
        list.innerHTML += row;
    });
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    displayBooks(books);
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

function clearInputs() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
}