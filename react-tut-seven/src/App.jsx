
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step 1 create context
const UserContext = createContext();
// step 2 wrap all child inside a wrapper
// step 3 pass the value
// step 4 consumer ka andr jkr consume karlo


const ThemeContext = createContext();

function App() {

  const [user , setUser] = useState({name:'hello'})

  const [theme , setTheme] = useState('light');

  return (

    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme , setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildA />
        </div>
    </ThemeContext.Provider>
    </UserContext.Provider>





    //<UserContext.Provider value={user}>

     // <ChildA />

    //</UserContext.Provider>

    
  )
}

export default App
export {UserContext}
export {ThemeContext}
