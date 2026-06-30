let books = JSON.parse(localStorage.getItem("myBooks")) || [];

let editId = null;

function saveBooks() {
  localStorage.setItem("myBooks", JSON.stringify(books));
}

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const category = document.getElementById("category").value;

  if (title == "" || author == "") {
    alert("Please fill all details");
    return;
  }

  let alreadyExists = false;
  for (let i = 0; i < books.length; i++) {
    if (
      books[i].title.toLowerCase() === title.toLowerCase() &&
      books[i].id !== editId
    ) {
      alreadyExists = true;
    }
  }
  if (alreadyExists) {
    alert("Ye book already library me hai");
    return;
  }

  if (editId !== null) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === editId) {
        books[i].title = title;
        books[i].author = author;
        books[i].category = category;
      }
    }
    editId = null;
    document.getElementById("addBtn").innerHTML = "Add Book";
  } else {
    const book = {
      id: Date.now(),
      title: title,
      author: author,
      category: category,
    };
    books.push(book);
  }

  saveBooks();
  displayBooks(books);
  clearInputs();
}

function displayBooks(bookArray) {
  const list = document.getElementById("bookList");
  const emptyMsg = document.getElementById("emptyMsg");
  list.innerHTML = "";

  if (bookArray.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }

  for (let i = 0; i < bookArray.length; i++) {
    const book = bookArray[i];

    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = book.category;

    const actionCell = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
      editBook(book.id);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      deleteBook(book.id);
    };

    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(categoryCell);
    row.appendChild(actionCell);

    list.appendChild(row);
  }
}

function editBook(id) {
  let book = null;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      book = books[i];
    }
  }
  if (book == null) return;

  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("category").value = book.category;

  editId = id;
  document.getElementById("addBtn").innerHTML = "Update Book";
}

function deleteBook(id) {
  books = books.filter(function (book) {
    return book.id !== id;
  });
  saveBooks();
  displayBooks(books);
}

function filterBooks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  let filtered = books.filter(function (book) {
    return book.title.toLowerCase().includes(query);
  });

  if (category !== "All") {
    filtered = filtered.filter(function (book) {
      return book.category === category;
    });
  }

  displayBooks(filtered);
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}


document.addEventListener("DOMContentLoaded", function () {
  displayBooks(books);
});
