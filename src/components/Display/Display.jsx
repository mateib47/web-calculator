import './display.scss'

const Display = ({text}) => {
  console.log(text);
  return (
    <div className='display' id='display'>{text}</div>
  )
}
export default Display