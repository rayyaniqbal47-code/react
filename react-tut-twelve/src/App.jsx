
import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count , setCount] = useState(0);

  const [input , setInput] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), input);

  

  return (
    <div>
      
      <button onClick={handleClick}>
        increment
      </button>

      <p>
        count: {count}
      </p>

      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />


    <p>
      double : {doubleValue}
    </p>

    </div>

    
  )
}

export default App



