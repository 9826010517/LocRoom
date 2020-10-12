import React from 'react';
import { Form } from 'react-bootstrap';
import { Tabs,Tab } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
class Loggerbody extends React.Component {
 
  state = { black: 1,selected: ""}
   render() {
    //  var x = 0;
    const {black, selected } = this.state;
    // var btn_class = x === 0 ? "blackButton" : "whiteButton";
    var btn_class = "whiteButton";
    // console.log('thisnew',x);
    //  dummy array for itrate data
    var chatusers = [{"id":"1","name":"amit mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
    {"id":"2","name":"amit mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
    {"id":"3","name":"amit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
    {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
  ];


  function deleteUserWithName(id) {
    console.log("id++",id);
    //  btn_class = x === 0 ? "blackButton" : "whiteButton";
  //   this.setState({
  //     black : 1
  // });
  }

  //  dummy array itrate
        var namesList = chatusers.map(function(value,index){
           return( 
          <div key={ index } onClick={() => deleteUserWithName(index)}     className={"row " + btn_class} >
          
          <div key={ index }  className="col-9 pt-2">
            <div key={ index} className="logger_sidetab1">
              <img key={ index } src={value.img} className="img-circle logger_singleuserimg"></img>
            </div>
            <div key={ index+1 } className="logger_sidetab2">
           <h6 key={  index } className="logger_chatusername">{value.name}</h6>
           <p key={  index+2 } className="logger_chatusertagline">{value.status}</p>
           </div>
          </div>
          <div key={ index+1 } className="col-3">
             <div key={ index } className="logger_chatuserlogtime text-right"><p  className="logger_chartime">{value.time}</p></div>
             <div key={ index+1 } className="logger_chatuserdropdown text-right">
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
        </div>
          // +++
        )

        })

// body of logger data 
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
                        {namesList}
                        {/* {this.chatusers.map((button, index) => this.renderButton(button, index))} */}
                       </Tab>
                       <Tab eventKey="profile" title="Profile" className="col-12">
                       {namesList}
                      </Tab>
                    </Tabs>
                      </div>
                  </div>
                  </div>
                  <div className="col-9 conversion_body2">Test2</div>
              </div>
          </div>
          {/* **************** */}
          </div>
      );
   }
}
export default Loggerbody;