

export default function Table({ rows }) {
  return (
    <div>
      <table className='score-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rows?.lenght === 0 ? (
            <tr>
              <td colspan="3">No Scores yet</td>
            </tr>
          ) : (
            rows?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
