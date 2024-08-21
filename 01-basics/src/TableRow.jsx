export default function TableRow({ author, title, img }) {
  console.log(author)
  return (
    <>
      <tr>
        <td>{author}</td>
        <td>{title}</td>
        <td>{img}</td>
      </tr>
    </>
  )
}
