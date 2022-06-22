
import Shelf from './Shelf';
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import * as BooksAPI from '../BooksAPI';

const Home = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
      const getBooks = async () => {
          const res = await BooksAPI.getAll();
          setBooks(res);
          console.log(res);

      };

      getBooks();
  }, []);

    const changeBookShelf = (book, newShelf) => {
        setBooks(books.map((b) => {
            if (b.id === book.id) {
                b.shelf = newShelf;
            }
            return b;
        }));
  
    }
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf title='Currently Reading' books={books.filter(b => b.shelf === 'currentlyReading')} onChangeBookShelf={(book, newShelf) => changeBookShelf(book, newShelf)} />
                    <Shelf title='Want To Read' books={books.filter(b => b.shelf === 'wantToRead')} onChangeBookShelf={(book, newShelf) => changeBookShelf(book, newShelf)} />
                    <Shelf title='Read' books={books.filter(b => b.shelf === 'read')} onChangeBookShelf={(book, newShelf) => changeBookShelf(book, newShelf)} />


                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}
export default Home;