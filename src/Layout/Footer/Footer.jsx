import "./footer.css"
import logo from "../../assets/images/logo.png"

export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
            <div className="footer_upper_wrapper">
                <div className="footer_logo">
                    <picture>
                        <img src={logo} alt="not found"/>
                    </picture>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                    <div className="logo_down">
                        <div className="email">
                            <h3>Email me at</h3>
                            <h4>alrafi321@icloud.com</h4>
                        </div>
                        <div className="call_us">
                            <h3>Call us</h3>
                            <h4>018924967</h4>
                        </div>
                    </div>
                </div>
                <div className="footer_text">
                    <h3>Lets Talk!</h3>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div className="icons">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section id="footer_down">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_contectss">
                    <h3>Copyright 2022, Finsweet.com</h3>
                </div>
                <div className="footer_menu">
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
