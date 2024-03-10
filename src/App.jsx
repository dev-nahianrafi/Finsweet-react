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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>      
          <Route path="/features" element={<Features/>}/>      
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
