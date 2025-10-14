import React , {useState , useEffect} from 'react'


const MultiEffectComponent = () => {

    const [count , setCount] = useState(0);
    const [seconds , setSeconds] = useState(0);


    useEffect(() => {
        console.log('count changed:' , count);
    }, [count]);

    // this will run only when count is changed


    useEffect(() => {

        const intervalId = setInterval(() => {  
            console.log('setinterval started....')
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log('time to stop....')
            clearInterval(intervalId);
        };
    }, []);

    // it will run only on first render

    function clickCount() {
        setCount(count + 1);
    }



  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={clickCount}>
        increment count
      </button>
      <br />
      <br />
      <h2>seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
