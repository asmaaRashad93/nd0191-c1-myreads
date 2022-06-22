import BookCard from "./BookCard";

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

export default Shelf;