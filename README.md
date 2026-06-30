# Book Library

A simple personal book tracker built with vanilla JavaScript. Add a book with its title, author, and category, search through your collection, and filter by category — all stored locally in the browser, no backend needed.

## What it does

- Add a book with a title, author, and category (Fiction, Non-Fiction, or Education)
- Search by title as you type
- Filter the list by category
- Edit any entry in place — the form fills with the existing values and the button switches to "Update Book"
- Delete a book from the list
- Everything is saved to `localStorage`, so the list is still there the next time you open the page
- Stops you from accidentally adding the same title twice

## How it's built

- **`index.html`** — the form for adding books, a search bar, a category filter, and the table that lists everything
- **`style.css`** — a clean, light card layout with color-coded edit and delete buttons
- **`script.js`** — all the logic, including saving to localStorage, the add/edit/delete functions, and the search and filter handling

## Tech Stack

`HTML5` `CSS3` `JavaScript (Vanilla)` `localStorage API`

## Running it locally

```bash
git clone https://github.com/Ra-kumar4216/Book-Library.git
cd "Book-Library/Book Library"
```

Open `index.html` in your browser. No dependencies, no build step.

## What I'd add next

Right now categories are limited to a fixed dropdown list. I'd like to make this more flexible — custom tags instead of fixed categories, sorting by author or date added, and maybe a simple way to mark books as read or unread.

---

Built by [Ratan Kumar](https://github.com/Ra-kumar4216) · [Portfolio](https://ratankumar-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/ratan-kumar-metha/)
