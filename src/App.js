import './app.scss';
import Topbar from './components/Topbar/Topbar';
import Calculator from './components/Calculator/Calculator';
import { useState, useRef } from 'react';
import Display from './components/Display/Display';

const App = () => {
  const [expr, _setExpr] = useState('0');
  const exprRef = useRef(expr);
  const setExpr = data => {
    exprRef.current = data;
    _setExpr(data);
  };

  return (
    <div className='app'>
      <Topbar />
      <div className='section'>

        <Calculator expr={exprRef} setExpr={setExpr}/>
      </div>
    </div>
  )
}

export default App