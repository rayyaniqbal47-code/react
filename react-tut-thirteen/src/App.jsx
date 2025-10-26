
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {

  //const [count , setCount] = useState(0);

 // function handleClick() {
  //  setCount(count + 1);
  //}

  //const handleClick = useCallback(() => {
  //  setCount(count + 1);
  //} , [count]);

  return (
    <div>

      <ExpensiveComponent />
      
      {/* 
      <button onClick={handleClick}>
        increment
      </button>

      <br /><br />

      <p>
        count: {count}
      </p>

      <br /><br />

      <div>
        <ChildComponent buttonName='click me' handleClick={handleClick} />
      </div>
      */}

    </div>
  )
}

export default App
