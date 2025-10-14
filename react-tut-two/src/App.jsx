import UserCard from "./components/UserCard"
import landscape1 from "./assets/landscape.jpg"
import landscape2 from "./assets/landscape.jpg"
import landscape3 from "./assets/landscape.jpg"



function App() {

  return (
    <div className='container'>
      <UserCard name="rayyan" description="description1" image={landscape1} style={{"border-radius":"10px"}}/>
      <UserCard name="john" description="description2" image={landscape2} style={{"border-radius":"10px"}}/>
      <UserCard name="mace" description="description3" image={landscape3} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
