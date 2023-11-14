import Footer  from "./component/footer"
import Navbar  from "./component/navbar"
import Content from "./component/Content"
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <div className="container">
    <Content/>
    <Footer/>
    </div>
    </>
  )
}

export default App
