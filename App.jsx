import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
   function show(){
    if(name===""||email===""||password===""){
      alert("Please fill all the details")
    }
    else{
      alert("Registered Successfully")
    }
   }
 {/*const [count, setCount] = useState(0)
  */}
  return (
    <>
    <h1>Registration Form</h1>
    <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/><br/>
    <input type="text" placeholder="Enter your e-mail Id"onChange={(e)=>setEmail(e.target.value)}/><br/>
    <input type="text" placeholder="Enter your Password Id"onChange={(e)=>setPassword(e.target.value)}/>
    <h2>{name}</h2>
    <h2>{email}</h2>
    <h2>{password}</h2>
     <button onClick={show}>Submit</button> 
{/* <div>
      <h1>Student Information</h1>
      <Student name="Shaurya" course="B-Tech" marks="100"/>
      <Student name="Money" course="B-Tech" marks="100"/>
    </div>
    */}
   {/* <Shaurya>
    <iframe src="https://www.youtube.com/embed/v5grCgf0Qy4" allowFullScreen></iframe>
    <iframe src="https://www.youtube.com/embed/A9n7ipCNhzo" allowFullScreen></iframe>
    <iframe src="https://www.youtube.com/embed/k85mRPqvMbE" allowFullScreen></iframe>
    <iframe src="https://www.youtube.com/embed/QNBO8XL-ctc?list=RDQNBO8XL-ctcstart_radio=1" allowFullScreen></iframe>
    <h1>Welcome to my webpage</h1>
    <h2>Shaurya</h2>

    <p>Shaurya Tiwari Jii ki jai hoo</p>
    <img src="https://wcwinners.com/wp-content/uploads/2022/06/ICC-Cricket-World-Cup-2011-Winner-Runner-Up-History-Facts.jpg"></img>
    <audio controls>
      <source src=""></source>
    </audio>
    <video controls>
      <source src=""></source>
    </video>
   </Shaurya> */}
    </>
  )
}
    

export default App
