import "./faq.css"

const Faq = () => {
  return (
    <>
        <section id="faq">
            <div className="container">
            <div className="faq_wrapper">
                <div className="faq_heading">
                    <h2 className="common_sub_header">Frequently asked questions</h2>
                    <a href="#" className="common_arow">Contact us for more info</a>
                </div>
                <div className="faq_main">
                    <div className="faq_item">
                        <div className="faq_info">
                            <div className="faq_number">
                                <span>01</span>
                            </div>
                            <div className="faq_details">
                                <h3>How much time does it take?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="faq_icon">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="faq_item">
                        <div className="faq_info">
                            <div className="faq_number">
                                <span>02</span>
                            </div>
                            <div className="faq_details">
                                <h3>What is your class naming convention?</h3>
                            </div>
                        </div>
                        <div className="faq_icon">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="faq_item">
                        <div className="faq_info">
                            <div className="faq_number">
                                <span>03</span>
                            </div>
                            <div className="faq_details">
                                <h3>How do you communicate?</h3>
                            </div>
                        </div>
                        <div className="faq_icon">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="faq_item">
                        <div className="faq_info">
                            <div className="faq_number">
                                <span>04</span>
                            </div>
                            <div className="faq_details">
                                <h3>I have a bigger project. Can you handle it?</h3>
                            </div>
                        </div>
                        <div className="faq_icon">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="faq_item">
                        <div className="faq_info">
                            <div className="faq_number">
                                <span>05</span>
                            </div>
                            <div className="faq_details">
                                <h3>What is your class naming convention?</h3>
                            </div>
                        </div>
                        <div className="faq_icon">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        

    
    </>
  )
}

export default Faq