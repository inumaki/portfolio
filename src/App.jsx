import Footer  from "./component/footer"
import Navbar  from "./component/navbar"
import Content from "./component/Content"
import { Contact } from "./component/Contact"
import { About } from "./component/About"
import More from "./component/More"
import { createBrowserRouter, Outlet } from "react-router-dom";
import './App.css'
import  {Projects}  from "./component/Projects"
import { Resume } from "./component/Resume"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
    <Navbar/>
    <div className="container">
    {/* <Content/> */}
    {/* <Contact/> */}
    <Outlet/>
    <More/>
    <Footer/>
    </div>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects/>
      },
    ],
  },
]);

