import "./priceing.css"
import women from "../../assets/images/woman-in-collared-shirt-774909.png"

const Priceing = () => {
  return (
    <>
        <section id="client">
        <div className="container">
            <div className="client_wrapper">
                <div className="client_content">
                    <h2 className="common_sub_header">What our clients say about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="client_img">
                    <h2>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</h2>
                    <div className="client_img2">
                        <picture>
                            <img src={women} alt="not found"/>
                        </picture>
                        <div className="tttt">
                            <h3>Jenny Wilson</h3>
                            <p>Vice President</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Priceing