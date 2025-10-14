
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  // create state
  // manage state
  // change state 
  // sabhi child component mein state ko sync karwadunga

  const [name , setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName} />
      <p>inside the parent:{name}</p>
    </div>
  )
}

export default App
