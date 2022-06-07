import './app.scss';
import Topbar from './components/Topbar/Topbar';
import Calculator from './components/Calculator/Calculator';

const App = () => {
  return (
    <div className='app'>
      <Topbar />
      <div className='section'>
        <Calculator />
      </div>
    </div>
  )
}

export default App