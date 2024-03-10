import "./home.css"
import bannerimg from "../../assets/images/banner_pic.png"

export const Home = () => {
  return (
    <>
    <section id="banner">
        <div className="container">
            <div className="banner_wrapper">
                <div className="banner_content">
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner_btn">
                        <a href="#" className="common_btn">View our work</a>
                        <a href="#" className="common_btn">View Pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="banner_images">
                    <picture>
                        <img src={bannerimg} alt="not found"/>
                    </picture>
                </div>
            </div>          
        </div>
    </section>    
    <section id="work">
        <div className="container">
            <div className="work_wrapper">
                <div className="work_content">
                    <h2 className="common_sub_header">How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#" className="common_arow">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="work_item_wrapper">
                    <div className="work_item">
                        <picture>
                            <img src="./images/pointer1.png" alt="not found"/>
                        </picture>
                        <h3>Strategy</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className="work_item">
                        <picture>
                            <img src="./images/pointer2 .png" alt="not found"/>
                        </picture>
                        <h3>Wireframing</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className="work_item">
                        <picture>
                            <img src="./images/pointer3.png" alt="not found"/>
                        </picture>
                        <h3>Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className="work_item">
                        <picture>
                            <img src="./images/pointer4.png" alt="not found"/>
                        </picture>
                        <h3>Development</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
