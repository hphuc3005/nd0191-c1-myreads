import { useMemo } from "react";
import { Book } from "./Book";

export const Shelf = ({ booksData, shelfID, shelfTitle, onChangeShelf, defaultChangerLabel }) => {
    return useMemo(() => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksData &&
                            Object.entries(booksData).map(([id, book]) => {
                                return (
                                    <li key={id}>
                                        <Book
                                            book={book}
                                            onChangeShelf={onChangeShelf}
                                            defaultChangerLabel={defaultChangerLabel}
                                            currentShelf={shelfID}
                                        />
                                    </li>
                                );
                            })}
                    </ol>
                </div>
            </div>
        );
    }, [booksData, defaultChangerLabel, onChangeShelf, shelfID, shelfTitle]);
};
