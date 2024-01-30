import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Scroll() {
    const [visible,setVisible] = useState(false)
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 
      
      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 
      
      window.addEventListener('scroll', toggleVisible); 
  return (
    <div>
       <p onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-[#0e4465d4] rounded-full bottom-4 md:right-6 right-3 py-2 px-3 text-white">
        <FontAwesomeIcon icon={faChevronUp}/>
        </p>
    </div>
  )
}

export default Scroll