import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { UserContext } from '../App';

const ChildC = () => {
    const user = useContext(UserContext);

    const {theme , setTheme} = useContext(ThemeContext);

    function handleClick() {
        if(theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

  return (

    <div>
      <button onClick={handleClick}>
        change theme
      </button>

      data:{user.name}
    </div>


    //<div>
    //  {user.name}
    //</div>
  )
}

export default ChildC
