import Footer  from "./component/footer"
import Navbar  from "./component/navbar"
import Content from "./component/Content"
import { Contact } from "./component/Contact"
import { About } from "./component/About"
import More from "./component/More"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import './App.css'

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
    ],
  },
]);

