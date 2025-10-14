
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  
  const [count , setCount] = useState(0);

  function handClick() {
    setCount(count+1);
  }


  return (
    <div>

      <Button handClick={handClick} text="click me">
        <h1>{count}</h1>
      </Button>

      {/*<Card name="rayyan">
        <h1>best hello</h1>
        <p>Lorem ipsum, doloate non esse dolorem adipisci officia!</p>
        <p>Lorem ipsum, doloate non esse dolorem adipisci officia!</p>
      </Card>*/}
    </div>
  )
}

export default App
