export default function EventExamples() {
  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <h3>Some Form Input</h3>
        <input type="text" name="book" placeholder="Enter your name..." />
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

function handleClick() {
  console.log('Submitting the form...')
}

function handleFormSubmission(e) {
  e.preventDefault()
  console.log('form submitted')
}
