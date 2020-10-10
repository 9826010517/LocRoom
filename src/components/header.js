import React from 'react';
import { Link} from 'react-router-dom';
class Header extends React.Component {
//   constructor(props){
//   super(props);
//   this.state = {
//     setData: false
//   }
// }

sendData = () => {
  alert('entered into loggedin pannel');
  this.props.parentCallback(false);
}
   render() {
      return (
        <div className="navigation_body">
        <div className="container">
        <nav className="navbar navbar-expand-lg">
           <Link className="navbar-brand" to="/">
             <img src="assets/img/logo/locroom1.png" className="img-fluid logoimg"></img>
             </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
               <Link to="/login" className="nav-link">Login</Link>
               </li>
               <li className="nav-item">
               <Link to="/register" className="nav-link">Rgister</Link>
               </li>
               <li className="nav-item">
               <Link to="/conversations" className="nav-link"  onClick={this.sendData}  >conversations</Link>
               </li>
             </ul>
           </div>
         </nav>
         </div>
            </div>
      );
   }
}
export default Header;