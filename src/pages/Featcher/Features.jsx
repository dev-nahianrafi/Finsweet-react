import "./features.css"

const Features = () => {
  return (
    <>
      <section id="featchers">
        <div className="container">
            <div className="feachers_header">
                <h3>Features</h3>
                <h2>Design that solves problems, one product at a time</h2>
            </div>
            <div className="featcher_item_wrapper">
                <div className="feacher_item">
                    <i className="fa-solid fa-users"></i>
                    <h3>Uses Client First</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div className="feacher_item">
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Two Free Revision Round</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div className="feacher_item">
                    <i className="fa-solid fa-pen-ruler"></i>
                    <h3>Template Customization</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div className="feacher_item">
                    <i className="fa-regular fa-comments"></i>
                    <h3>24/7 Support</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div className="feacher_item">
                    <i className="fa-solid fa-stopwatch"></i>
                    <h3>Quick Delivery</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div className="feacher_item">
                    <i className="fa-solid fa-file-pen"></i>
                    <h3>Hands-on approach</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features