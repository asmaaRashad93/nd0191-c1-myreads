import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

const BookCard = ({ book, onChangeBookShelf }) => {
    const defaultImg = "https://books.google.com/books/content?id=1&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"

    const updateBookShelf = (book, newShelf) => {
        const update = async () => {
            await BooksAPI.update(book, newShelf);
            if (onChangeBookShelf)
                onChangeBookShelf(book, newShelf);
        };
        update();

    }
    return (
        <li >
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks&&book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : defaultImg}})`
                            ,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={e => updateBookShelf(book, e.target.value)} defaultValue={!book.shelf ? 'none' : book.shelf}>
                            {(!book.shelf || book.shelf === 'none') && <option value="none" disabled>
                                Add to...
                            </option>}
                            {book.shelf && book.shelf !== 'none' && <option value="none" disabled>
                                Move to...
                            </option>}
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {
                    book.authors && book.authors.map((author) => (
                        <div key={author} className="book-authors">
                            {author}
                        </div>
                    ))
                }
            </div>
        </li>
    )
}

BookCard.prototypes={
    book:PropTypes.object.isRequired,
    onChangeBookShelf:PropTypes.func.isRequired
}
export default BookCard;