

export default function Button({title, handleSubmit}) {
  return (
    <div>
          <button className='data-button'
              onClick={handleSubmit}
          >{title}</button>
    </div>
  )
}
