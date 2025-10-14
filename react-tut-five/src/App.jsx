
import './App.css'

function App() {

  function handleClick() {
    alert('i am click')
  }

  function handleInputChange(e) {
    console.log('value till now' , e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("The form was submitted");
  }

  return (

    <div>

      <button>
        click me 
      </button>

      {/*<form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>submit</button>
      </form>

      {/*<button onClick={handleClick}>
        click
      </button>*/}

    </div>

    
  )
}

export default App
