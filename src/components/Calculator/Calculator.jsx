import './calculator.scss';
import Button from '../Button/Button';

const Calculator = () => {
  return (
    <div className='calculator'>
        <div className="top">

        </div>
        <div className="bottom">
            <Button character={'1'} id={'one'}/>
            <Button character={'2'} id={'two'}/>
            <Button character={'3'} id={'three'}/>
            <Button character={'='} id={'equals'}/>


        </div>
    </div>
  )
}

export default Calculator