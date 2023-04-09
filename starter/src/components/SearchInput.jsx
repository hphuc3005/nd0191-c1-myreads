import { useMemo } from "react";

export const SearchInput = ({ onSearchingBooks }) => {
    return useMemo(() => {
        return (
            <div className="search-books-input-wrapper">
                <input
                    onChange={onSearchingBooks}
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                />
            </div>
        );
    }, [onSearchingBooks]);
};
