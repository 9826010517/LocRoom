import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Loggerbody from './loggerbody'
// import gatsbyIconImage from '../../public/assets/adminsection/dist/img/AdminLTELogo.png'
export class Loggedheader extends React.Component {
   render() {
      return (
      //   ++++++++++
      <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
      {/* <!-- Navbar --> */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">Home</a>
          </li>
        </ul>

    
        {/* <!-- Right navbar links --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Notifications Dropdown Menu --> */}
         <Dropdown>
               <Dropdown.Toggle variant="success" id="dropdown-basic" className="dpbtn">
                   <img src="assets/adminsection/dist/img/user2-160x160.jpg" className="img-circle elevation-2 dropdownimg" alt="User Image"></img>
                   Alexander Pierce
               </Dropdown.Toggle>

               <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
      {/* <!-- /.navbar --> */}

      {/* <!-- Main Sidebar Container --> */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel (optional) --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image text-center">
              <img src="assets/img/logo/locroom1.png" className="chatroom_logo" alt="User Image"></img>
            </div>
            {/* <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div> */}
          </div>
           {/* <!-- Sidebar Menu --> */}

             {/* <!-- Sidebar Menu --> */}
           {/* <!-- Sidebar Menu --> */}
           <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>
                    Conversion
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu -->  */}
         </div>
      </aside>
      {/* <!-- Content Wrapper. Contains page content --> */}
      
         <Loggerbody />
        
       </div>
       </div>  
      // +++++++++++++
      );
   }
}

