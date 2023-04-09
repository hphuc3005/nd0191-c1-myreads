import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import React from "react";
import { SHELF_OPTIONS } from "./constants";
import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutes } from "./routes";


const initAllBooksData = {
  currentlyReading: { title: SHELF_OPTIONS.currentlyReading, booksData: {} },
  wantToRead: { title: SHELF_OPTIONS.wantToRead, booksData: {} },
  read: { title: SHELF_OPTIONS.read, booksData: {} }
}

function App() {
  const [allBooksData, setAllBooksData] = useState(null);

  useEffect(
    () => {
      const fetchAllBooks = async () => {
        if (!allBooksData) {
          const rawAllBooksData = await getAll();
          const formattedAllBooksData = rawAllBooksData &&
            Array.isArray(rawAllBooksData) &&
            rawAllBooksData.reduce(
              (data, currentBook) => {
                const currentShelf = currentBook?.shelf;
                if (currentShelf && Object.prototype.hasOwnProperty.call(data, currentShelf)) {
                  data[currentShelf].booksData[currentBook.id] = currentBook;
                }
                return data
              },
              initAllBooksData
            );
          setAllBooksData(() => formattedAllBooksData);
        }
      };
      fetchAllBooks();
    }, [allBooksData]
  )

  const onChangeShelf = (currentShelf, shelf, book) => {
    currentShelf !== shelf && (() => {
      const currentShelfData = allBooksData[currentShelf];
      const shelfData = allBooksData[shelf];
      const updatedBooksData = {};
      if (shelfData) {
        book.shelf = shelf;
        shelfData.booksData[book.id] = book;
        updatedBooksData[shelf] = shelfData;
      }
      if (currentShelfData) {
        delete currentShelfData.booksData[book.id];
        updatedBooksData[currentShelf] = currentShelfData;
      }
      setAllBooksData((prevState) => {
        return {
          ...prevState,
          ...updatedBooksData
        }
      });
      update({ id: book?.id }, shelf);
    })();

  }


  return (
    <BrowserRouter>
      {allBooksData && <Routes>{renderRoutes({ allBooksData, onChangeShelf })}</Routes>}
    </BrowserRouter>
  );
}

export default App;
