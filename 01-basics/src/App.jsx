import Navbar from './Navbar'

export default function App() {
  const headingStyle = { color: 'yellow', backgroundColor: 'green' }
  return (
    <>
      <div>
        <h1 style={headingStyle}>
          This is the heading section
        </h1>
        <Navbar />
      </div>
    </>
  )
}
