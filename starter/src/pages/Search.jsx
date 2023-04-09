import { Link } from "react-router-dom";
import { SearchInput } from "../components/SearchInput";
import { useState } from "react";
import { search } from "../BooksAPI";
import { Book } from "../components/Book";
import { MAX_BOOKS_PER_SEARCH } from "../constants";

export const Search = ({ onChangeShelf, allBooksData }) => {
    const [booksList, setBooksList] = useState(null);
    const booksShelvesData = {
        ...allBooksData.currentlyReading.booksData,
        ...allBooksData.wantToRead.booksData,
        ...allBooksData.read.booksData,
    };
    const onSearchingBooks = (event) => {
        const query = event?.target?.value;
        if (Boolean(query)) {
            const fetchBooksList = async () => {
                const rawBooksList = await search(query, MAX_BOOKS_PER_SEARCH);
                setBooksList(() => rawBooksList);
            };
            fetchBooksList();
        } else {
            setBooksList(() => null);
        }
    };
    return (
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >
                        Close
                    </Link>
                    <SearchInput onSearchingBooks={onSearchingBooks} />
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksList &&
                            Array.isArray(booksList) &&
                            booksList.map((book) => {
                                const categorizedShelf = booksShelvesData[book?.id]?.shelf;
                                return (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            onChangeShelf={onChangeShelf}
                                            currentShelf={categorizedShelf}
                                            defaultChangerLabel={
                                                categorizedShelf ? "Move to..." : "Add to..."
                                            }
                                        />
                                    </li>
                                );
                            })}
                    </ol>
                </div>
            </div>
        </div>
    );
};
