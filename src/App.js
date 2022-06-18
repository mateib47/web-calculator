import './app.scss';
import Topbar from './components/Topbar/Topbar';
import Calculator from './components/Calculator/Calculator';
import { useState } from 'react';
import Display from './components/Display/Display';

const App = () => {
  const [expr, setExpr] = useState('0');


  return (
    <div className='app'>
      <Topbar />
      <div className='section'>

        <Calculator expr={expr} setExpr={setExpr}/>
      </div>
    </div>
  )
}

export default App