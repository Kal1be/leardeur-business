import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Body1() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        //   slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        //   slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        //   slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div>
        <div className="my-4">
            <h2 className="lg:px-12 py-3 font-bold lg:text-5xl text-2xl px-4 lg:w-[900px]">
                Voir nos dernier Canaper et passer 
                 vos commade
                </h2>
        </div>
        <div className="lg:flex lg:px-12 px-4">
       
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 lg:w-72">
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
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
            <img src="/leardeur-business/a9.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
            <img src="/leardeur-business/a10.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
            <img src="/leardeur-business/a11.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
            </Carousel>
        
 <h2 className="text-xl font-bold my-2 px-1">Canaper de couleur slate</h2>
    <p className="px-1 pb-10 font-bold">prix: 500000FCFa *discutable</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a10.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper de couleur chocolat</h2>
    <p className="px-1 pb-10 font-bold">prix: 350000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a11.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper en bois de couleur blanc</h2>
    <p className="px-1 pb-10 font-bold">prix: 600000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a11.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper en bois de couleur blanc</h2>
    <p className="px-1 pb-10 font-bold">prix: 600000FCFa</p>
        </div>


        </div>
        {/* ==========________++++++++++++ the second element of the ++++++++++++++++++++++++++++++++ */}
        <div className="lg:flex lg:px-12 px-4 pt-6">
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a12.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper en bois de couleur gray</h2>
    <p className="px-1 pb-10 font-bold">prix: 300000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a13.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper pour salon en blanc</h2>
    <p className="px-1 pb-10 font-bold">prix: 450000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a14.png" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper nigerian de couleur kaki</h2>
    <p className="px-1 pb-10 font-bold">prix: 650000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a15.jpg" alt="" className="h-[30vh] w-full md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Tout en un *discutable</h2>
    <p className="px-1 pb-10 font-bold">prix: 850000FCFa</p>
        </div>

        </div>
      
    </div>
  )
}

export default Body1
