import Author from "../component/Author"
import Body from "../component/Body"
import Body1 from "../component/Body1"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

function Home() {
  return (
    <div>
        <Navbar/>
      <Body/>
      <Body1/>
      <Author/>
      <Footer/>
    </div>
  )
}

export default Home