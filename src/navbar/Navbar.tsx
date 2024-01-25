import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.scss"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Navbar() {
  const [open,setOpen]=useState(false)
  const Open=()=>{
    setOpen(!open)
  }
  return (
   <div className="wrapper">
    <div className="wrap">
    <div className="flex justify-between items-center md:py-8 py-4 px-2 md:px-12">
        <div>
            <h2 className="font-bold md:text-4xl text-2xl text-white " id="title">Leader Business</h2>
        </div>
      <div>
        <ul className="md:flex lg:w-[700px] justify-between items-center text-xl text-white" id={open?"open":"close"}>
          <FontAwesomeIcon icon={faClose} className="fabar absolute right-5 text-2xl bg-white p-2 text-slate-800" onClick={()=>{
            setOpen(!open)
          }}/>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Product</li>
            <li>Feature</li>
            <li>Contact Us</li>
            <li className="bg-gray-950 rounded-xl py-1 px-8 text-center my-6 md:my-0">Login</li>
        </ul>
        <div className="fabar text-black" onClick={Open}>
        <div></div>
        <div></div>
        <div></div>
        </div>
      </div>
    </div>
    <div className="lg:px-12  lg:pt-32 lg:pb-36 pt-16 pb-24 text-gray-200 shadow-2xl lg:w-[70%] text-4xl w-[88%] p-2" id="epic">
        <h2 className="font-medium" id="opened">Rejoignez leadeur business pour tout vos differents orientations et besoin.</h2>
        <h2 className="lg:text-7xl font-bold">
            Trouvez les fournitures que tout le monde aime.
        </h2>
    </div>
    </div>
   </div>
  )
}

export default Navbar
