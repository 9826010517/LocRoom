import React from 'react';
class Footer extends React.Component {
   render() {
      return (
        <footer>
       <div className="footer-main">
         <div className="footer-area footer-padding">
             <div className="container">
                 <div className="row  justify-content-between">
                 <div className="col-lg-3 col-md-4 col-sm-5">
                         <div className="single-footer-caption mb-50">
                             <div className="footer-tittle">
                                 <h4>Quick Links</h4>
                                 <ul>
                                     <li><a href="#">Twitter</a></li>
                                     <li><a href="#">Facebook</a></li>
                                     <li><a href="#">Linkedin</a></li>
                                     <li><a href="#">Github</a></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-4"></div>
                     <div className="col-lg-5 col-md-4 col-sm-8">
                          <div className="single-footer-caption mb-30">
                              <div className="footer-logo">
                                  <a href="index.html"><img src="assets/img/logo/locroom1.png" alt=""></img></a>
                              </div>
                              <div className="footer-tittle">
                                  <div className="footer-pera">
                                      <p className="info1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                 </div>
                              </div>
                          </div>
                     </div>
                 </div>
                 
                 <div className="row align-items-center">
                     <div className="col-xl-12 ">
                        <div className="footer-copy-right text-center">
                         <p>
                       Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                         </p>
                        </div>
                     </div>
                 </div>
             </div>
         </div>
       </div>
 
    </footer>
      );
   }
}
export default Footer;