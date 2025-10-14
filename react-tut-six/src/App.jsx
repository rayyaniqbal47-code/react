
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetecher from './components/DataFetecher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

  //const [count , setCount] = useState(0);
  //const [total , setTotal] = useState(1);

  // first == side effect function
  // second == clean up function
  // third == comma seprated dependencies list

  // variation 1
  // it run on every render
  //useEffect(() => {
  //  alert('i will run on each render')
  //})

  
  // variation 2
  // it runs only on first render
  //useEffect(() => {
  //  alert('i will run only on first render')
  //}, [])


  // variation 3
  //useEffect(() => {
  //  alert('i will run every time when count is updated')
  //}, [count])


  // variation 4
  // multiple dependencies
  //useEffect(() => {
  //  alert('i will run every time when count or total is updated')
  //}, [count , total])
  
  
  // variation 5
  // is bar let add a cleanup function
  //useEffect(() => {
   // alert('count is updated')
  
   // return () => {
   //   alert('count is unmounted from UI')
   // }
  //}, [count])
  

  


  //function handleClick() {
  //  setCount(count+1);
  //}

  //function handleTotal() {
  //  setTotal(total+1);
  //}

  

  return (
    <div>

      {/* 
      <LoggerComponent /> 
      

      <TimerComponent />
      

      <DataFetecher />
      

      <ResizeComponent />
      

      <MultiEffectComponent />
      */}

      {/*
      <button onClick={handleClick}>
        update count
      </button>
      <br />
      count is:{count}
      
      <br />
      <br />

      <button onClick={handleTotal}>
        update total
      </button>
      <br />
      total is:{total}
      */}



      
    </div>
  )
}

export default App
