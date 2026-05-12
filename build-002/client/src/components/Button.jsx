

export default function Button({props, sendScores}) {
  return (
    <div>
          <button
              className= 'send-scores'
              onClick={sendScores}
              props= {props}
              >{props}</button>
    </div>
  )
}
