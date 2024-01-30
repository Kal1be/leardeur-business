import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar,faHeart} from "@fortawesome/free-solid-svg-icons"
import "./body.scss"
function Body1() {
    // const responsive = {
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 1,
    //     //   slidesToSlide: 3 // optional, default to 1.
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 1,
    //     //   slidesToSlide: 2 // optional, default to 1.
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1,
    //     //   slidesToSlide: 1 // optional, default to 1.
    //     }
    //   };
  return (
    <div>
        <div className="my-4 flex justify-center">
            <h2 className="lg:px-12 py-3 px-4 text-center border bg-gray-200 text-2xl font-medium inline-block">
               Voir les pepites
                </h2>
        </div>
        <div className="lg:flex lg:px-12 px-2 ">
       
        <div className="relative  md:h-[53vh] h-[48vh] border my-4 md:my-0 lg:mx-2 w-full">
          <div className="relative">
          <img src="/leardeur-business/b11.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a4.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
           <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>
        {/* ++++++++++++++++ the second one */}
        <div className=" md:h-[53vh] h-[48vh] border relative  my-4 md:my-0 lg:mx-2 w-full">
        <div className="relative">
          <img src="/leardeur-business/b5.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a7.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
          <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>
        <div className=" md:h-[53vh] h-[48vh] border relative my-4 md:my-0 lg:mx-2 w-full">
        <div>
          <img src="/leardeur-business/b10.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a8.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
          <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>
        <div className="md:h-[53vh] h-[48vh] border relative my-4 md:my-0 lg:mx-2 w-full">
        <div>
          <img src="/leardeur-business/b10.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a8.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
            <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>


        </div>
        {/* ==========________++++++++++++ the second element of the ++++++++++++++++++++++++++++++++ */}
        <div className="lg:flex lg:px-12 px-4 pt-6">
        <div className="relative  md:h-[53vh] h-[48vh] border my-4 md:my-0 lg:mx-2 w-full">
          <div className="relative">
          <img src="/leardeur-business/b11.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a4.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
           <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>
        {/* ++++++++++++++++ the second one */}
        <div className=" md:h-[53vh] h-[48vh] border relative  my-4 md:my-0 lg:mx-2 w-full">
        <div className="relative">
          <img src="/leardeur-business/b5.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a7.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
          <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>
        <div className=" md:h-[53vh] h-[48vh] border relative my-4 md:my-0 lg:mx-2 w-full">
        <div>
          <img src="/leardeur-business/b10.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a8.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
          <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>
        <div className="md:h-[53vh] h-[48vh] border relative my-4 md:my-0 lg:mx-2 w-full">
        <div>
          <img src="/leardeur-business/b10.jpeg" alt="" className="h-[30vh] w-full md:w-[60vw] absolute"/>
          <img src="/leardeur-business/a8.png" alt="" className="h-[30vh] w-full md:w-[60vw] absolute" id="test"/>
          </div>
            <div className="absolute top-4 flex justify-between items-center px-2 w-full">
            <h3 className="bg-black font-bold text-white px-3 py-2 rounded-full">Promo-10%</h3>
           <h3> <FontAwesomeIcon icon={faHeart} className="bg-gray-200 text-white p-3 rounded-full"/></h3>
           </div>
           <div className="bottom-4 absolute">
           <h2 className="text-black text-xl font-bold mx-2">Leader Business</h2>
           <p className="font-medium mx-2">Celosia - canape d'angle reversible avec tetiere</p>
           <h3 className="flex"><h2 className="text-red-400 font-bold mx-2">500000fcfa </h2><h2 className="line-through font-bold mx-2 text-gray-400"> 600000fcfa</h2></h3>
          <div className="text-sm mx-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
           <span> 1 avis</span>
          </div>
           </div>
        </div>


        </div>
      
    </div>
  )
}

export default Body1
