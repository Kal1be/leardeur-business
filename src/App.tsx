import './App.css'
import Home from './pages/Home'
import {useState,useEffect} from "react"

function App() {
  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },7000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader'>
       <span className='animation1'></span>
        <span className='animation2'></span>
        <span className='animation2'></span>
       </div>
     )
  }
  return (
    <>
    <Home/>
    </>
  )
}

export default App
