import React from 'react';
class Footer extends React.Component {
   render() {
      return (
        <footer>
       <div class="footer-main">
         <div class="footer-area footer-padding">
             <div class="container">
                 <div class="row  justify-content-between">
                 <div class="col-lg-3 col-md-4 col-sm-5">
                         <div class="single-footer-caption mb-50">
                             <div class="footer-tittle">
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
                     <div class="col-lg-4"></div>
                     <div class="col-lg-5 col-md-4 col-sm-8">
                          <div class="single-footer-caption mb-30">
                              <div class="footer-logo">
                                  <a href="index.html"><img src="assets/img/logo/locroom1.png" alt=""></img></a>
                              </div>
                              <div class="footer-tittle">
                                  <div class="footer-pera">
                                      <p class="info1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                 </div>
                              </div>
                          </div>
                     </div>
                 </div>
                 
                 <div class="row align-items-center">
                     <div class="col-xl-12 ">
                        <div class="footer-copy-right text-center">
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