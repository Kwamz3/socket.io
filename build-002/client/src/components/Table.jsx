import scores from "../App";

export default function Table({ name, position, score}) {
  return (
    <div>
      <table>
        <th>
          <tr>
            <td>{position}</td>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        </th>
        {scores.map((scores) => {
          <tr>
            <td>{}</td>
            <td>{scores?.score}</td>
            <td>{scores?.score}</td>
          </tr>
        })}
      </table>
    </div>
  );
}
