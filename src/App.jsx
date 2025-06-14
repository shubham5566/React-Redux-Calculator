

import './App.css'
import Display from './componants/Display'
import Keypad from './componants/Keypad'

function App() {


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-2 ">
      <div className="p-3 rounded shadow border w-100" style={{ width: '300px' }}>
        <Display />
        <Keypad />
      </div>
    </div>
  )
}

export default App
