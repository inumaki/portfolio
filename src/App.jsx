import Footer  from "./component/footer"
import Navbar  from "./component/navbar"
import Content from "./component/Content"
import { Contact } from "./component/Contact"
import More from "./component/More"
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <div className="container">
    {/* <Content/> */}
    <Contact/>
    <More/>
    <Footer/>
    </div>
    </>
  )
}

export default App
