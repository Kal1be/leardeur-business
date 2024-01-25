import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    <h2 className="lg:text-6xl text-2xl font-bold my-4">Ce que nos disent a <br />propos de nous</h2>
     <div className=" shadow-2xl">
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={1000}
         keyBoardControl={true}
        //  customTransition="all .5"
        //  transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <div className="lg:px-12 py-8">
        <img src="/leardeur-business/togui.jpg" alt="" className="w-36 rounded-full h-36"/>
        kalibe
        </div>  
        <div className="lg:px-12 py-8">
        <img src="/leardeur-business/togui.jpg" alt="" className="w-36 rounded-full h-36"/>
        <p>je suis le developpeur</p>
        </div>  
        <div className="lg:px-12 py-8">
        <img src="/leardeur-business/togui.jpg" alt="" className="w-36 rounded-full h-36"/>
        <p>je suis le developpeur</p>
        </div>  
        <div className="lg:px-12 py-8">
        <p>je suis le developpeur</p>
        <img src="/leardeur-business/togui.jpg" alt="" className="w-36 rounded-full h-36"/>
        </div>  
</Carousel>
    
      
    </div>
   </div>
  )
}

export default Author
