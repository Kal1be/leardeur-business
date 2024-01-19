import "./navbar.scss"

function Navbar() {
  return (
   <div className="wrapper">
     <div className="flex justify-between items-center md:py-8 py-4 px-2 md:px-12">
        <div>
            <h2 className="font-bold md:text-3xl text-2xl text-white">Leader Business</h2>
        </div>
      <div>
        <ul className="md:flex lg:w-[700px] justify-between items-center text-xl text-white " id="open">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Product</li>
            <li>Feature</li>
            <li>Contact Us</li>
            <li className="bg-gray-950 rounded-xl py-1 px-8">Login</li>
        </ul>
        <div className="fabar">
        <div></div>
        <div></div>
        <div></div>
        </div>
      </div>
    </div>
    <div className="lg:px-12  lg:pt-28 pt-24 text-white lg:w-[70%] text-4xl w-[88%] p-2">
        <h2 className="font-medium" id="open">Rejoignez leadeur business pour tout vos differents orientations</h2>
        <h2 className="lg:text-7xl font-bold">
            Trouvez les furnitures que tout le monde aime.
        </h2>
    </div>
   </div>
  )
}

export default Navbar
