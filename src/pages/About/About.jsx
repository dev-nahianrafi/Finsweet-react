import "./about.css"
import card1 from "../../assets/images/card1.jpg"
import card2 from "../../assets/images/card2.jpg"
import card3 from "../../assets/images/card3.jpg"

export const About = () => {
  return (
    <>
        <section id="cards">
        <div className="container">
            <div className="card_header">
                <h2 className="common_sub_header">How we work</h2>
                <a href="#" className="common_arow">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="cards_wrapper">
                <div className="cards_item1">
                    <picture>
                        <img src={card1} alt="not found"/>
                        <div className="overly">
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <a href="#" className="bbh">View project <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </picture>
                </div>
                <div className="cards_item2">
                    <div className="cards2_item2_1">
                        <picture>
                            <img src={card2} alt="not found"/>
                            <div className="overly2">
                                <h3>Unisaas Website <br/> Design</h3>
                                <a href="#" className="bbh">View project <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </picture>
                    </div>
                    <div className="cards2_item1_2">
                        <picture>
                            <img src={card3} alt="not found"/>
                            <div className="overly3">
                                <h3>Unisaas Website <br/> Design</h3>
                                <a href="#" className="bbh">View project <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    </>
  )
}
