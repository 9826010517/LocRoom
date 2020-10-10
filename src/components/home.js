import React from 'react';
class Home extends React.Component {
   render() {
      return (
        <main>
        <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 col-md-9 ">
                                <div className="hero__caption">
                                    <span data-animation="fadeInUp" data-delay=".4s">App Landing Page</span>
                                    <h1 data-animation="fadeInUp" data-delay=".6s">Get things done<br></br>with InfyChat</h1>
                                    <p data-animation="fadeInUp" data-delay=".8s">Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
                                   <div className="slider-btns">
                                        <a data-animation="fadeInLeft" data-delay="1.0s" href="industries.html" className="btn radius-btn">Buy Now</a>
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                                    <img src="assets/img/hero/hero_right.png" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        {/* <!-- Best Features Start --> */}
        <section className="best-features-area section-padd4">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-12 col-lg-12">
                        <div className="row">
                            <div className="col-lg-10 col-md-10">
                                <div className="section-tittle">
                                    <h2>Some of the best features Of Our App!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-features mb-70">
                                    <div className="features-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Easy to Costomize</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-features mb-70">
                                    <div className="features-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Extreme Security</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-features mb-70">
                                    <div className="features-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Customer Support</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-features mb-70">
                                    <div className="features-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Customer Support</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-features mb-70">
                                    <div className="features-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Customer Support</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-features mb-70">
                                    <div className="features-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Creative Design</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
       {/* What customer say */}
       <section className="service-area sky-blue section-padding2">
            <div className="container">
            
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-tittle text-center">
                            <h2>What customers say?</h2>
                        </div>
                    </div>
                </div>
              
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <span className="flaticon-businessman"></span>
                            </div> 
                            <div className="service-cap">
                                <h4><a href="#">ANKIT KALATHIYA</a></h4>
                                <p>Awesome Chat app solution. Very easy to install and Use.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption active text-center mb-30">
                            <div className="service-icon">
                                <span className="flaticon-pay"></span>
                            </div> 
                            <div className="service-cap">
                                <h4><a href="#">DHAVAL GOLAKIYA</a></h4>
                                <p>Great chat app to empower users with chat and connect them with each other.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <span className="flaticon-plane"></span>
                            </div> 
                            <div className="service-cap">
                                <h4><a href="#">VIVEK BELADIYA</a></h4>
                                <p>Amazing Chat Solution with great set of features with great UI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <div className="available-app-area">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-5 col-lg-6">
                        <div className="app-caption">
                            <div className="section-tittle section-tittle3">
                                <h2>Start using InfyChat now</h2>
                                <p>Start using InfyChat now.</p>
                                <div className="app-btn">
                                    <button type="button" className="btn btn-danger getstarted_btn">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="app-img">
                            <img src="assets/img/shape/available-app.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="app-shape">
                <img src="assets/img/shape/app-shape-top.png" alt="" className="app-shape-top heartbeat d-none d-lg-block"></img>
                <img src="assets/img/shape/app-shape-left.png" alt="" className="app-shape-left d-none d-xl-block"></img>
            </div>
        </div>
       
        {/* <!-- Available App End--> */}
    </main>
      );
   }
}
export default Home;