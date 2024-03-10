import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/About/About";
import RootLayout from "./Layout/RootLayout";
import Features from "./pages/Featcher/Features";
import Priceing from "./pages/Priceing/Priceing";
import Faq from "./pages/FAQ/Faq";
import Blog from "./pages/Blog/Blog";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>      
          <Route path="/features" element={<Features/>}/>      
          <Route path="/priceing" element={<Priceing/>}/>      
          <Route path="/FAQ" element={<Faq/>}/>      
          <Route path="/blog" element={<Blog/>}/>      
        </Route>
        </>
    )
  )
  return (
  <RouterProvider
    router={router}
  />
  )
}

export default App
