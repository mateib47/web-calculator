import './display.scss'

const Display = ({text}) => {
  return (
    <div className='display' id='display'>{text == 0 ? text : text.slice(1)}</div>
  )
}
//FIX BUG
export default Display