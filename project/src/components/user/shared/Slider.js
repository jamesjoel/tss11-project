import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const images = [
        "assets/img/bg-hero.jpg",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <>
            {/* <!-- Navbar & Hero Start --> */}
            {/* <div className="container-xxl position-relative p-0">


                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                       <div className="col-lg-6 text-center text-lg-start">
                           <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                           <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                           <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                       </div>
                       <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="/assets/img/hero.png" alt=""/> 
                       </div>
                   </div>

                    </div>
                </div>
            </div> */}
            <div>
                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})`,backgroundSize: "100% 100%" }}>

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})`,backgroundSize: "100% 100%" }}>

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})`,backgroundSize: "100% 100%" }}>

                        </div>
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default Slider