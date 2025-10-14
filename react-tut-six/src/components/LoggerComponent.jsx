
import React , {useState , useEffect} from 'react'

const LoggerComponent = () => {

    const [count , setCount] = useState(0);

    useEffect(() => {
      console.log('component rendered and count changed:' , count)
    })

    // run on every render

    function handleCount() {
        setCount(count+1);
    }
    
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleCount}>increment</button>
    </div>
  )
}

export default LoggerComponent
