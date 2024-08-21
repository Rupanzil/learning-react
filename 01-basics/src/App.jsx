import EventExamples from './EventExamples'
import Navbar from './Navbar'
import TableRow from './TableRow'
import './app.css'

export default function App() {
  const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: './images/book-1.jpg',
      id: 1,
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: './images/book-2.jpg',
      id: 2,
    },
  ]
  const headingStyle = { color: 'yellow', backgroundColor: 'green' }
  return (
    <>
      <div>
        <h1 style={headingStyle}>This is the heading section</h1>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <div>Table Data</div>
        <table>
          <th>Author</th>
          <th>Book Title</th>
          <th>Book Cover</th>
          <tbody>
            {books.map((book) => {
              // const { author, title, img, id } = book // we don't need this if we pass the whole object
              return (
                // <TableRow author={author} title={title} img={img} key={id} /> // here we need to type out all the
                // properties of the book object
                // instead we can use spread operator
                <TableRow {...book} key={book.id} />
              )
            })}
          </tbody>
        </table>
      </div>
      <EventExamples />
    </>
  )
}
