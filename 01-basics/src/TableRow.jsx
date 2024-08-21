export default function TableRow({ name, age, isCoder }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{isCoder}</td>
      </tr>
    </>
  )
}
