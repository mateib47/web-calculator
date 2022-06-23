import './display.scss'

const Display = ({text}) => {
  console.log("display update: " + text);
  return (
    <div className='display' id='display'>
      <p>{text}</p>
    </div>
  )
}
export default Display