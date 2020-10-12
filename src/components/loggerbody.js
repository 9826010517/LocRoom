import React from 'react';
import { Form } from 'react-bootstrap';
import { Tabs,Tab } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
export class Loggerbody extends React.Component {
    state = {
         arr : [{"id":"1","name":"amit mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"2","name":"amit mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"3","name":"amit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
      ],
        selected: ""
      };
    
      changeColor = id => {
        this.setState({ selected: id });
        console.log('new section',id)
      };

      render() {
        const { selected, arr } = this.state;
        var btn_class = selected === "" ? "blackButton" : "whiteButton";
        console.log(selected);
        return (
            <div className="content-wrapper">
              {/* ****************** */}
              <div className="conversion_body">
                  <div className="row p-4" >
                      <div className="col-3 conversion_body1">
                      <div className="row">
                          <div className="col-6 my-auto pl-3" ><h5>Conversations</h5></div>
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
                          <div className="col-12 mt-1 ml-0 mr-0 pl-0 pr-0">
                          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                          <Tab eventKey="home" title="Home" className="col-12">
                                {arr.map(({ name, id, status,time, img}) => (
                                     <div  onClick={() => this.changeColor(id)}  className={ "row " + "loggerinnerbody " + (selected == id ? "blackButton" : "" )  }>
                                           {/*  */}
                                           <div  className="col-9 pt-2">
                                                <div className="logger_sidetab1">
                                                <img src={img} className="img-circle logger_singleuserimg"></img>
                                                </div>
                                                <div  className="logger_sidetab2">
                                                <h6 className="logger_chatusername">{name}</h6>
                                                <p className="logger_chatusertagline">{status}</p>
                                                </div>
                                            </div>
                                            <div  className="col-3">
                                                <div className="logger_chatuserlogtime text-right"><p  className="logger_chartime">{time}</p></div>
                                                <div className="logger_chatuserdropdown text-right">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="logger_dropdownbtn">
                                                        <p className="logger_drptext">...</p>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </div>
                                            </div>
                                           {/*  */}
                                     </div>
                                ))}
                           </Tab>
                           <Tab eventKey="profile" title="Profile" className="col-12">
                           {arr.map(({ name, id, status,time, img}) => (
                                     <div  onClick={() => this.changeColor(id)}  className={ "row " + "loggerinnerbody " + (selected == id ? "blackButton" : "" )  }>
                                           {/*  */}
                                           <div  className="col-9 pt-2">
                                                <div className="logger_sidetab1">
                                                <img src={img} className="img-circle logger_singleuserimg"></img>
                                                </div>
                                                <div  className="logger_sidetab2">
                                                <h6 className="logger_chatusername">{name}</h6>
                                                <p className="logger_chatusertagline">{status}</p>
                                                </div>
                                            </div>
                                            <div  className="col-3">
                                                <div className="logger_chatuserlogtime text-right"><p  className="logger_chartime">{time}</p></div>
                                                <div className="logger_chatuserdropdown text-right">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="logger_dropdownbtn">
                                                        <p className="logger_drptext">...</p>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </div>
                                            </div>
                                           {/*  */}
                                     </div>
                                ))}
                          </Tab>
                        </Tabs>
                          </div>
                      </div>
                      </div>
                      <div className="col-9 conversion_body2 text-center">
                          <div class="row h-100">
                              <div class="col-12 d-flex justify-content-center align-items-center">
                              <h6>No Conversion Yet</h6>
                              </div>
                               </div>
                         
                           </div>
                  </div>
              </div>
              {/* **************** */}
              </div>
          );
      }
}
export default Loggerbody ;

