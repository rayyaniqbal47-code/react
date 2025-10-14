import React from 'react'
import "./UserCard.css" 

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='title'>{props.name}</p>
        <img id='user-image' src={props.image} width="200" height="200" alt={props.name} />
        <p id='user-description'>{props.description}</p>
    </div>
  )
}

export default UserCard
