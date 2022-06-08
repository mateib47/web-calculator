import './button.scss'

const Button = ({character, id, setExpr, expr}) => {


  return (
    <div className='button' id={id} onClick={() => {setExpr('' + expr + character)}}>{character}</div>
  )
}

export default Button