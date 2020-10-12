import React from 'react';
import { Form } from 'react-bootstrap';
import { Tabs,Tab } from 'react-bootstrap';
class Loggerbody extends React.Component {
   render() {
      return (
        <div className="content-wrapper">
          {/* ****************** */}
          <div className="conversion_body">
              <div className="row p-4" >
                  <div className="col-3 conversion_body1">
                  <div className="row">
                      <div className="col-6 my-auto pl-3"><h5>Conversations</h5></div>
                      <div className="col-6 text-right">
                      <i className="fa fa-users chaticon" aria-hidden="true"></i>
                      <i className="fa fa-comment chaticon" aria-hidden="true"></i>
                      </div>
                      <div className="col-12 mt-1">
                            <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Search" className="serchInput" />
                                    </Form.Group>
                            </Form>
                      </div>
                      <div className="col-12 mt-1">
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Home" className="col-12">
                      <div className="row">
                         {/* <div className="col-9">
                           <img src="assets/adminsection/dist/img/user2-160x160.jpg" className="img-circle logger_singleuser"></img>
                           <h6 className="">Ankit Sharma</h6>
                           <p className="">status tag line</p>
                         </div>
                         <div className="col-3"><h6>hello11</h6></div> */}
                       </div>
                       </Tab>
                       <Tab eventKey="profile" title="Profile" className="col-12">
                            {/* <div className="row">
                              <div className="col-9"><h6>hello</h6></div>
                              <div className="col-3"><h6>hello11</h6></div>
                            </div> */}
                      </Tab>
                    </Tabs>
                      </div>
                  </div>
                  </div>
                  <div className="col-9 conversion_body2">Test2</div>
              </div>
          </div>
          
              {/* <h1>Loggerbody working</h1> */}
          
          {/* **************** */}
          </div>
      );
   }
}
export default Loggerbody;