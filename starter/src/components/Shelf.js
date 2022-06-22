import BookCard from "./BookCard";
import PropTypes from 'prop-types';

const Shelf = ({ title, books, onChangeBookShelf }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books &&
                        books.map((book) => (
                            <BookCard key={book.id} book={book} onChangeBookShelf={(book, shelf) => onChangeBookShelf(book, shelf)} />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}
Shelf.prototypes={
    title:PropTypes.string.isRequired,
    books:PropTypes.array.isRequired,
    onChangeBookShelf:PropTypes.func.isRequired
}
export default Shelf;