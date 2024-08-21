import Navbar from './Navbar'
import TableRow from './TableRow'
import './app.css'

export default function App() {
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
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>IsCoder</th>
          </thead>
          <tbody>
            <TableRow name="Rupanzil" age="30" isCoder="yes" />
            <TableRow name="Rupanzil" age="30" isCoder="yes" />
            <TableRow name="Rupanzil" age="30" isCoder="yes" />
            <TableRow name="Rupanzil" age="30" isCoder="yes" />
          </tbody>
        </table>
      </div>
    </>
  )
}
