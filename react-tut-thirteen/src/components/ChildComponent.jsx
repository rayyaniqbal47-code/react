import React from 'react'

const ChildComponent = React.memo(
  
    (props) => {

      console.log('child component got re rendered again')

  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button> 
    </div>
  )
}
)

export default ChildComponent

// agar react memo ke andr wrap kardete hain apne child component
//  ko to wo component tabhi re render hoga jab props change
//  hoge nahi to re render nhi hoga

// if u are sending a function then react memo will
//  not be able to save you from re rendering


