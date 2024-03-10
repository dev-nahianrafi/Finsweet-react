import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <picture>
                        <a href="#">
                            <img src={logo} alt="not found"/>
                        </a>
                    </picture>
                </div>
                <div className="nav_menu">
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about us</Link>
                        </li>
                        <li>
                            <Link to="/features">features</Link>
                        </li>
                        <li>
                            <a href="#">priceing</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                    </ul>
                </div>
                <div className="nav_btn">
                    <a href="#" className="common_btn">contract us</a>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
