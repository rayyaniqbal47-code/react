
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  //const [count , setCount] = useState(0);
  //let val = useRef(0);

  //let btnRef = useRef(); 


  //function handleIncrement() {
 //   val.current = val.current + 1;
 //   console.log('value of val' , val.current)
 //   setCount(count+1);
 // }

  // it runs on every render
 // useEffect(() => {
  //  console.log('main firse render ho gaya hu')
 // })

 // function changeColor() {
  //  btnRef.current.style.backgroundColor = 'red';
  //}

  const [time , setTime] = useState(0);

  let timerRed = useRef(null);

  function startTimer() {

    timerRed.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

  }

  function stopTimer() {
    clearInterval(timerRed.current);
    timerRed.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (

    <div>

      <h1>stop watch: {time} seconds</h1>
      <button onClick={startTimer}>
        start
      </button>

      <br /><br />

      <button onClick={stopTimer}>
        stop
      </button>
      
      <br /><br />

      <button onClick={resetTimer}>
        reset
      </button>


  





    {/* 
      <button ref={btnRef} onClick={handleIncrement}>
        increment
      </button>

      <br /><br />

      <button onClick={changeColor}>
        change color of first button
      </button>

      <br /><br />

      <p>count: {count}</p>
    
    */}

    </div>

    
  )
}

export default App
