

export default function Button({ props, onClick }) {
  return (
    <div>
      <button
        className='send-scores'
        onClick={onClick}>
        {props}
      </button>
    </div>
  )
}
