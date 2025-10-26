
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement , reset , incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {

  const  [amount , setAmout] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function changeAmount(e) {
    setAmout(e.target.value);
  }

  function handleIncrementAmountClick() {
    dispatch(incrementByAmount(amount));
  }



  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br /><br />
      <button onClick={handleResetClick}>reset</button>
      <br />
      <br />

      <input type="number" value={amount} onChange={changeAmount} />
      <br />
      <br />
      <button onClick={handleIncrementAmountClick}>increment by amount</button>

    </div>
  )
}

export default App
