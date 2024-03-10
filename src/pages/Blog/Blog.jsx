import "./blog.css"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import blog3 from "../../assets/images/blog3.png"

const Blog = () => {
  return (
    <>
        <section id="blog">
        <div className="container">
            <div className="email_heading">
                <h2 className="common_sub_header">Our blog</h2>
            </div>
            <div className="blog_wrapper">
                <div className="blog_item">
                    <div className="blog_item_img">
                        <picture>
                            <img src={blog1} alt="not found"/>
                        </picture>
                    </div>                  
                    <h5>19 Jan 2022</h5>
                    <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#" className="common_arow">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="blog_item">
                    <div className="blog_item_img">
                        <picture>
                            <img src={blog2} alt="not found"/>
                        </picture>
                    </div>                  
                    <h5>19 Jan 2022</h5>
                    <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#" className="common_arow">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="blog_item">
                    <div className="blog_item_img">
                        <picture>
                            <img src={blog3} alt="not found"/>
                        </picture>
                    </div>                  
                    <h5>19 Jan 2022</h5>
                    <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#" className="common_arow">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog