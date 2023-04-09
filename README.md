# MyReads Project

This is project for bookshelf management which allows you to select and categorize books you have
read, are currently reading, or want to read. The proeject emphasizes using React to build the
application and provides an API server and client library that you will use to persist information
as you interact with the application.

## Installation

To get started developing right away:

-   install all project dependencies with `npm install`
-   start the development server with `npm run start`

## Launching

Navigate to [`http://localhost:3000`](http://localhost:3000)

In this application, the main page displays a list of "shelves" (i.e. categories), each of which
contains a number of books. The three shelves are:

-   Currently Reading
-   Want to Read
-   Read

Each book has a control that lets you select the shelf for that book. When you select a different
shelf, the book moves there. The default value for the control always be the current shelf the book
is in.

The main page has a link to `/search`, a search page that allows you to find books to add to your
library. The search page has a text input that may be used to find books. As the value of the text
input changes, the books that match that query are displayed on the page, along with a control that
lets you add the book to your library.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against.
The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform
necessary operations on the backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST
    request

### `search`

Method Signature:

```js
search(query);
```

-   query: `<String>`
-   Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20
    book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make
    sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of
search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the
_only_ terms that will work with the backend, so don't be surprised if your searches for Basket
Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can find more information on how to perform common tasks
[here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not
accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
