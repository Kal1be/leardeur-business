import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./author.scss"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Author() {
  return (
   <div className="lg:mx-14 mx-4 my-6 ">
  <div className=" justify-center">
  <h2 className="lg:text-4xl text-2xl font-bold inline-block text-gray-900">Ce que nos clients disent a <br />propos de nous</h2>
  </div>
  <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perferendis voluptatem cumque 
    suscipit voluptas nemo delectus praesentium quo provident porro? Reprehenderit
   </p>
     <div className="togue">
        <Carousel responsive={responsive}
         swipeable={true}
         draggable={true}
         showDots={true}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //  autoPlaySpeed={1000}
         keyBoardControl={true}
        //  customTransition="all .5"
        //  transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <div className="lg:px-28 md:py-8 py-3 md:flex items-center">
       <div className="md:flex justify-center">
       <img src="/leardeur-business/togui.jpg" alt="" className="w-40 rounded-full h-40 mx-6 md:mx-0"/>
       </div>
     <div className="md:w-[640px] md:mx-4">
     <h2 className="text-xl font-bold md:text-left mx-6 md:mx-0">Dingamnodji Etienne</h2>
    <div className="flex">
    <span className="md:text-6xl text-2xl mx-2">``</span>
    <p className="text-lg font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo laudantium quo repellat 
      consectetur iste. Sapiente odio reiciendis at autem aspernatur, 
      unde optio temporibus error quam a labore adipisci quidem facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iste eveniet autem ipsum!</p>
    </div>
    
     </div>
        </div>  
        <div className="lg:px-28 md:py-8 py-3 md:flex items-center">
       <div className="md:flex justify-center">
       <img src="/leardeur-business/people3.png" alt="" className="w-40 rounded-full h-40 mx-6 md:mx-0"/>
       </div>
     <div className="md:w-[640px] md:mx-4">
     <h2 className="text-xl font-bold md:text-left mx-6 md:mx-0">Orimadji Adele</h2>
    <div className="flex">
    <span className="md:text-6xl text-2xl mx-2">``</span>
    <p className="text-lg font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo laudantium quo repellat 
      consectetur iste. Sapiente odio reiciendis at autem aspernatur, 
      unde optio temporibus error quam a labore adipisci quidem facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iste eveniet autem ipsum!</p>
    </div>
    
     </div>
        </div>  
        <div className="lg:px-28 md:py-8 py-3 md:flex items-center">
       <div className="md:flex justify-center">
       <img src="/leardeur-business/people2.jpg" alt="" className="w-40 rounded-full h-40 mx-6 md:mx-0"/>
       </div>
     <div className="md:w-[640px] md:mx-4">
     <h2 className="text-xl font-bold md:text-left mx-6 md:mx-0">Mandedene Rose</h2>
    <div className="flex">
    <span className="md:text-6xl text-2xl mx-2">``</span>
    <p className="text-lg font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo laudantium quo repellat 
      consectetur iste. Sapiente odio reiciendis at autem aspernatur, 
      unde optio temporibus error quam a labore adipisci quidem facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iste eveniet autem ipsum!</p>
    </div>
    
     </div>
        </div>  
        <div className="lg:px-28 md:py-8 py-3 md:flex items-center">
       <div className="md:flex justify-center">
       <img src="/leardeur-business/people1.jpeg" alt="" className="w-40 rounded-full h-40 mx-6 md:mx-0"/>
       </div>
     <div className="md:w-[640px] md:mx-4">
     <h2 className="text-xl font-bold md:text-left mx-6 md:mx-0">Kalibe Felix</h2>
    <div className="flex">
    <span className="md:text-6xl text-2xl mx-2">``</span>
    <p className="text-lg font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo laudantium quo repellat 
      consectetur iste. Sapiente odio reiciendis at autem aspernatur, 
      unde optio temporibus error quam a labore adipisci quidem facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iste eveniet autem ipsum!</p>
    </div>
    
     </div>
        </div>   
</Carousel>
    
      
    </div>
   </div>
  )
}

export default Author
