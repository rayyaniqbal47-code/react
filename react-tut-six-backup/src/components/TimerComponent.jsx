import React , {useState , useEffect} from 'react'



const TimerComponent = () => {

    const [seconds , setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('setinterval executed...')
            setSeconds(prevSeconds => prevSeconds + 1);
        } , 1000);

        return () => {
            console.log('time to stop...')
            clearInterval(intervalId);
        };

    } , []);

    // it will run only on first render


  return (
    <div>
      <h1>seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
