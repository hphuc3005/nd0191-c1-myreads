import { useMemo } from "react";
import { Shelf } from "../components/Shelf";
import { Link } from "react-router-dom";

export const Main = ({ allBooksData, onChangeShelf }) => {
    return useMemo(() => {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {allBooksData &&
                        Object.entries(allBooksData).map(([shelfID, shelfData]) => {
                            return (
                                <div key={shelfID}>
                                    <Shelf
                                        booksData={shelfData.booksData}
                                        shelfTitle={shelfData.title}
                                        onChangeShelf={onChangeShelf}
                                        shelfID={shelfID}
                                        defaultChangerLabel="Move to..."
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }, [allBooksData, onChangeShelf]);
};
