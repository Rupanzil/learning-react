import { books } from './books'
import Book from './Book'

const BookList = () => {
  const getBook = (id) => {
    const currentBook = books.find((book) => book.id === id)
    console.log(currentBook)
  }

  return (
    <>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} getBook={getBook} rank={index} />
      })}
    </>
  )
}

export default BookList
