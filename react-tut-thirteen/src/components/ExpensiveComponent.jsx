import React, { useCallback } from 'react'
import {  useState } from 'react'

const ExpensiveComponent = () => {

    const [count , setCount] = useState(0);
    const [text , setText] = useState("");

    const expensiveCalculation = useCallback( () => {
        console.log('running expensive calculation.....')

        let result = 0;
        for (let i = 0;  i < 1000;  i++ ){
            result += i;
        }
        return result;
    } , [])

    

    function handleText (e) {
        setText(e.target.value);
    }

    function handleCount() {
        setCount(count + 1);
    }

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />

      <br /><br />

      <p>Expensive calculation result: {expensiveCalculation()}</p>

      <br /><br />

      <button onClick={handleCount}>
        increment count
      </button>


    </div>
  )
}

export default ExpensiveComponent
