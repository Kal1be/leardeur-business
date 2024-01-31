import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.scss"
import { faClose,faHeart,faSearch,faMessage,faUserCircle,faStar,faBars, faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useState,useEffect} from "react"
// import { faShoelace } from "@fortawesome/free-brands-svg-icons/faShoelace"
import {motion} from "framer-motion"

function Navbar() {
  const [open,setOpen]=useState(false)
  const [navbar,setNavbar] = useState(true)
  // const [search,setSearch] = useState(true)
 useEffect(()=>{
const handleScroll = ()=>{
 if(window.pageYOffset > 350 && navbar){
   setNavbar(false)
 }
 else if (window.pageYOffset<= 350 !==navbar){
   setNavbar(true)
 }

}
window.addEventListener("scroll",handleScroll)
return()=>{
 window.removeEventListener("scroll",handleScroll)
}
 },[navbar])

  const Open=()=>{
    setOpen(!open)
  }
  return (
<div>
<div className="wrapper">
    <div className="wrap">
    <div className="flex justify-between items-center md:py-8 py-4 px-2 md:px-12">
        <div>
            <h2 className="font-bold md:text-4xl text-2xl text-white " id="title">Leader Business</h2>
        </div>
      <div>
        <ul className="md:flex lg:w-[700px]  z-50 justify-between items-center text-xl text-gray-300" id={open?"open":"close" }>
          <FontAwesomeIcon icon={faClose} className="fabar absolute right-5 text-2xl bg-white px-2 py-1 text-slate-800" onClick={()=>{
            setOpen(!open)
          }}/>
            <li>Home</li>
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
    <div className="lg:px-12  lg:pt-32 lg:pb-36 pt-16 pb-24 text-gray-200 shadow-2xl lg:w-[70%] text-4xl w-[88%] md:p-2 ps-2" id="epic">
        <motion.h2
   initial={{opacity:0,y:-60}}
   transition={{duration:1}}
   whileInView={{opacity:1,y:0}}
         className="font-medium" id="opened">Rejoignez leadeur business pour tout vos differents orientations et besoin.</motion.h2>
        <motion.h2
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
         className="lg:text-7xl  font-bold">
            Trouvez les fournitures que tout le monde aime.
        </motion.h2>
    </div>
    </div>
   </div>
   {/* +++++++++++++++ the shrink navbar +++++++++++++++++++_____________++++++++++++++ */}
   <div className="fixed top-0 z-30 bg-white w-full md:px-2 px-1 py-2" id={navbar?"nav":"navbar"}>
   <div className="flex items-center justify-between md:px-8 px-2">
   <h2 className="font-bold md:text-4xl text-2xl text-slate-900" id="title">Leader Business</h2>
   <button className="bg-black text-white px-4 py-2" id="my-nav"><FontAwesomeIcon icon={faBars}/> Products</button>
   <div className="bg-gray-200 flex items-center md:w-[450px] md:rounded-xl rounded-full justify-between p-3">
   <input type="text" className="outline-none bg-gray-200" placeholder="que cherchez vous" id="my-nav"/>
   <FontAwesomeIcon icon={faSearch}/>
   </div>
    <div className="" >
   <div className="md:w-[250px] mb-1 flex justify-between">
   <FontAwesomeIcon icon={faHeart} className='border p-2 rounded-full bg-gray-200 text-white hover:bg-slate-700 hover:text-red-300' id="my-nav"/>
    <FontAwesomeIcon icon={faMessage} className='border p-2 rounded-full bg-gray-200 text-white hover:bg-slate-700 hover:text-red-300 mx-3 md:mx-0'/>
    <FontAwesomeIcon icon={faUserCircle} className='border p-2 rounded-full bg-gray-200 text-white hover:bg-slate-700 hover:text-red-300' id="my-nav"/>
    <p className="relative"><FontAwesomeIcon icon={faCartShopping} className='border p-2 rounded-full bg-gray-200 text-white hover:bg-slate-700 hover:text-red-300'/><span className="absolute bg-red-600 text-white rounded-full  px-1 -mt-1 right-[.2px] text-sm">0</span></p>
   </div>
   <div className="block text-sm" id="my-nav">
   <FontAwesomeIcon icon={faStar} className="text-orange-500"/>
   <FontAwesomeIcon icon={faStar} className="text-orange-500"/>
   <FontAwesomeIcon icon={faStar} className="text-orange-500"/>
   <FontAwesomeIcon icon={faStar} className="text-orange-500"/>
   <FontAwesomeIcon icon={faStar}/>
    <span> 4.5/5 </span>sur <span className="font-bold">1613</span>
   </div>
    </div>
   </div>
   </div>
</div>
  )
}

export default Navbar
