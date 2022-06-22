import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from '../BooksAPI';
import BookCard from "./BookCard";

const Search = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");


    const updateQuery = (queryTxt) => {
        // setQuery(query.trim());
      setQuery(queryTxt);
      if(queryTxt==="")
      setBooks([]);
      else
        search(queryTxt);
    }

    const search = (query) => {
        const searchBooks = async () => {
            const res = await BooksAPI.search(query);
            res && res.length?setBooks(res):setBooks([]);
        };
        searchBooks();

    }
    const changeBookShelf = (book, newShelf) => {
        setBooks(books.map((b) => {
            if (b.id === book.id) {
                b.shelf = newShelf;
            }
            return b;
        }));
  
    }
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to='/'
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        value={query}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books&&
                        books.map((book) => (
                            <BookCard key={book.id} book={book} onChangeBookShelf={(book, newShelf) => changeBookShelf(book, newShelf)} />
                        ))
                    }
                </ol>
            </div>
        </div>
    );
}
export default Search;