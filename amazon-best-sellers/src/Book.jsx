import './book.css'

const Book = ({ author, title, img, id, getBook, rank }) => {
  return (
    <>
      <div className="book">
        <span className="book-rank">#{rank + 1}</span>
        <h3>{title}</h3>
        <img src={img} />
        <p>{author}</p>
        <button
          onClick={() => {
            getBook(id)
          }}
        >
          Get Id
        </button>
      </div>
    </>
  )
}

export default Book
