import React from 'react';
import { Form } from 'react-bootstrap';
import { Tabs,Tab } from 'react-bootstrap';
import { Button,Modal } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

// Group add modal
  export function Createnewgroup () {

    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
   

    return (
     
      <>
        <a onClick={showModal}><i className="fa fa-users chaticon" aria-hidden="true"></i></a>
        <Modal show={isOpen} onHide={hideModal} dialogClassName="groupmodalbody">
          <Modal.Header closeButton className="groupmodelheader">
            <Modal.Title>
              <div className="text-center">
                <h6 className=""> Create New Group </h6>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="groupmodelinner1">
            <div className="row">
               <div className="col-12">
               <div className="App">
                <ol className="mw400 center" style={{ textAlign: "left" }}>
                    <li>
                   <UploadPreview />
                   </li>
                </ol>
               </div>
               <div>
              </div>
              </div>
            {/* changing details test */}
            <Showgrouplist />
            </div>
            {/* changing details test ****/}
            </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <button onClick={hideModal} className="groupcancelbtn">Cancel</button>
            <button className="groupsavebtn">Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

// Create conversion modal
  export function Createnewconversation  () {
    const [isOpen, setIsOpens] = React.useState(false);
  
    const showModal = () => {
      setIsOpens(true);
    };
  
    const hideModal = () => {
      setIsOpens(false);
    };
  
    return (
     
      <>
        <a onClick={showModal}> <i className="fa fa-comment chaticon" aria-hidden="true"></i></a>
        <Modal show={isOpen} onHide={hideModal} dialogClassName="newconversationmodal">
          <Modal.Header closeButton className="conversationheader">
            <Modal.Title className="conversationheding">Add New Conversations / Groups</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-0">
           <Newconversion />
          </Modal.Body>
        </Modal>
      </>
    );
  };

       


  // ++++++++ class for upload image and used in group modal function

  class UploadPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = { file: 'assets/adminsection/dist/img/user2-160x160.jpg' };
      this.onChange = this.onChange.bind(this);
      this.resetFile = this.resetFile.bind(this);
    }

    onChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
    }
  
    resetFile(event) {
      event.preventDefault();
      this.setState({ file: null });
    }

    render() {
      return (
        // +++++++++
      <div>
         <div class="group-gap">
        {/* <!-- Upload image --> */}
        <div class="avatar-upload">
          <div class="avatar-edit">
          <label className="fileinputlabel"> Upload Image
          <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"   className="inputfile" onChange={this.onChange}/>
           </label> 
          </div>
          <div class="avatar-preview">
          <img id="imagePreview" src={this.state.file} className="" />
          </div>
        </div>
      </div>
      </div>
        // ++++++++++
      );
    }
  }

  
  class Showgrouplist extends React.Component {
    constructor(props){
      super(props);
      this.state = {
           alluser : [{"id":"1","name":"amit mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"2","name":"amit mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"3","name":"amit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
        ],
        selecteduser : [{"id":"3","name":"amit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}]
        };
      }

      render() {
        const { alluser ,selecteduser } = this.state;
        return (

          // +++++++++++++++++++++++++++++
             <div className="col-12">
               <div className="row">
                     {/* ********** form div */}
                     <div className="col-12">
                         <Form>
                                <Form.Group controlId="formBasicEmail mt-4">
                                  <Form.Label>Group Name</Form.Label>
                                  <Form.Control type="text" placeholder="Enter group name" />
                                </Form.Group>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-1">
                                      <Form.Label className="radioformgoruplabel">Group Type - </Form.Label>
                                      <Form.Check inline label="Open" type={type}  name="formHorizontalRadios" id={`inline-${type}-1`} />
                                      <Form.Check inline label="Close" type={type}  name="formHorizontalRadios" id={`inline-${type}-2`} />
                                    </div>
                                  ))}
                                  {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-2">
                                      <Form.Label className="radioformgoruplabel">Group Segment - </Form.Label>
                                      <Form.Check inline label="Public" type={type}  name="formHorizontalRadios" id={`inline-${type}-1`} />
                                      <Form.Check inline label="Private" type={type}  name="formHorizontalRadios" id={`inline-${type}-2`} />
                                    </div>
                                  ))}
                          </Form>
                        </div>

                     {/* *************************** */}
                     <div className="col-6">
                     <div className="search form">
                     <Form>
                    <Form.Group controlId="formsearch mt-3">
                      <Form.Label>Members : </Form.Label>
                      <Form.Control type="text" placeholder="find member" />
                    </Form.Group>
                    </Form>
                     </div>
                     <div className="membersdiv">
                     <div className="grouplisdetail">
                            {alluser.map(({ name, id, status,time, img}) => (
                              <div className="row">
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
                                      <div  className="col-3 my-auto">
                                       <Button variant="success" className="addbtns">Add</Button>{' '}
                                              </div>
                                  {/*  */}
                               </div>
                            ))}
                        </div>
                     </div>
                     </div>
                     <div className="col-6 pt-4">
                        {
                          selecteduser.map( ({ name, id, status,time, img}) => (
                            <div className="row">
                           <div  className="col-9 pt-2">
                            <div className="logger_sidetab1">
                          <img src={img} className="img-circle logger_singleuserimg"></img>
                           </div>
                         <div  className="logger_sidetab2">
                             <h6 className="logger_chatusername">{name}</h6>
                                <p className="logger_chatusertagline">{status}</p>
                                   </div>
                                     </div>
                                <div  className="col-3 my-auto">
                                 <Button variant="danger" className="removebtn">Remove</Button>{' '}
                                        </div>
                         </div>
                      
                          ))
                        }
                     </div>
                     </div>
                 </div>
        )
     
        
      }
  }


  // For new conversion popup section class

  class Newconversion extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        ourcontact : [{"id":"1","name":"amit mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"2","name":"prateek mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"3","name":"mohint mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"nilesh mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"shivani mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"priya mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"rishikesh mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
     ],
     newconversation : [{"id":"1","name":"ritika mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"2","name":"willim mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"3","name":"santosh mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"john mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"kirti mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"avani mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
       {"id":"4","name":"lavina mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
     ],
     blockeduser : [{"id":"1","name":"pankaj mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
     {"id":"2","name":"sanjiv mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
     {"id":"3","name":"purvy mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
     {"id":"4","name":"chahal mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
     {"id":"4","name":"shivansh mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
     {"id":"4","name":"nilesh mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
     {"id":"4","name":"monu mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
   ],
   groups: [{"id":"1","name":"sandeep mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
   {"id":"2","name":"ankit mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
   {"id":"3","name":"raju mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
   {"id":"4","name":"lucky mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
   {"id":"4","name":"arjun mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
   {"id":"4","name":"zeel mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
   {"id":"4","name":"nidhi mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
 ],
 search:null,
 conversation:null,
 gotblocked:null,
 groupsearch:null
     };
    }
     
    searchSpace=(event)=>{
      let keyword = event.target.value;
      this.setState({search:keyword})
    }
    searchConversataion=(event)=>{
      let keyword = event.target.value;
      this.setState({conversation:keyword})
    }
  searchBlockeduser=(event)=>{
    let keyword = event.target.value;
    this.setState({gotblocked:keyword})
  }
  searchGroups=(event)=>{
    let keyword = event.target.value;
    this.setState({groupsearch:keyword})
  }
    render() {
      const { ourcontact, newconversation, blockeduser,groups } = this.state;
      return (
        <div className="row">
        <div className="col-12">
        <Tabs defaultActiveKey="contacts" id="uncontrolled-tab-example">
              <Tab eventKey="contacts" title="My Contacts">
              <div className="col-12 ">
                <Form>
                    <Form.Group controlId="formBasicEmail mt-4" className="mt-3">
                      <Form.Control type="text" placeholder="Search" onChange={(e)=>this.searchSpace(e)} />
                    </Form.Group>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-1 text-center">
                          <Form.Check inline label="Male" type={type}     id={`inline-${type}-1`} />
                          <Form.Check inline label="Female" type={type}   id={`inline-${type}-2`} />
                          <Form.Check inline label="Online" type={type}   id={`inline-${type}-2`} />
                          <Form.Check inline label="Offline" type={type}  id={`inline-${type}-2`} />
                        </div>
                      ))}
               </Form>
            </div>
            <div className="col-12 mycontactlist">
            {/* {ourcontact.map(({ name, id, status,time, img}) => (
                                           <div  className="col-12 pt-2 contactinner">
                                                <div className="logger_sidetab1">
                                                <img src={img} className="img-circle logger_singleuserimg"></img>
                                                </div>
                                                <div  className="logger_sidetab2">
                                                <h6 className="logger_chatusername">{name}</h6>
                                                <p className="logger_chatusertagline">{status}</p>
                                                </div>
                                            </div>
                    ))} */}
               {/* *********************** searching practice ******************************* */}

             {  ourcontact.filter((data)=>{
                    if(this.state.search == null)
                        return data
                    else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
                        return data
                    }
                  }).map(({ name, id, status,time, img}) => (
                    <div  className="col-12 pt-2 contactinner">
                         <div className="logger_sidetab1">
                         <img src={img} className="img-circle logger_singleuserimg"></img>
                         </div>
                         <div  className="logger_sidetab2">
                         <h6 className="logger_chatusername">{name}</h6>
                         <p className="logger_chatusertagline">{status}</p>
                         </div>
                     </div>
                      ))} 
                
               {/* ************************** searching practice ***************************** */}
            </div>

              </Tab>
              <Tab eventKey="conversion" title="New Conversation">
              <div className="col-12 ">
                <Form>
                    <Form.Group controlId="formBasicEmail mt-4" className="mt-3">
                      <Form.Control type="text" placeholder="Search"  onChange={(e)=>this.searchConversataion(e)} />
                    </Form.Group>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-1 text-center">
                          <Form.Check inline label="Male" type={type}     id={`inline-${type}-1`} />
                          <Form.Check inline label="Female" type={type}   id={`inline-${type}-2`} />
                        </div>
                      ))}
               </Form>
            </div>
            <div className="col-12 mycontactlist">
            {   newconversation.filter((data)=>{
                    if(this.state.conversation == null)
                        return data
                    else if(data.name.toLowerCase().includes(this.state.conversation.toLowerCase())){
                        return data
                    }
                  }).map(({ name, id, status,time, img}) => (
                                           <div  className="col-12 pt-2 contactinner">
                                                <div className="logger_sidetab1">
                                                <img src={img} className="img-circle logger_singleuserimg"></img>
                                                </div>
                                                <div  className="logger_sidetab2">
                                                <h6 className="logger_chatusername">{name}</h6>
                                                <p className="logger_chatusertagline">{status}</p>
                                                </div>
                                            </div>
                    ))}
            </div>

              </Tab>
              <Tab eventKey="groups" title="Groups" >
              <div className="col-12 ">
                <Form>
                    <Form.Group controlId="formBasicEmail mt-4" className="mt-3">
                      <Form.Control type="text" placeholder="Search" onChange={(e)=>this.searchGroups(e)}  />
                    </Form.Group>
               </Form>
            </div>
              <div className="col-12 mycontactlist">
                  {groups.filter((data)=>{
                    if(this.state.groupsearch == null)
                        return data
                    else if(data.name.toLowerCase().includes(this.state.groupsearch.toLowerCase())){
                        return data
                    }
                  }).map(({ name, id, status,time, img}) => (
                     <div  className="col-12 pt-2 contactinner">
                           <div className="logger_sidetab1">
                                    <img src={img} className="img-circle logger_singleuserimg"></img>
                           </div>
                            <div  className="logger_sidetab2">
                               <h6 className="logger_chatusername">{name}</h6>
                          </div>
                       </div>
                    ))}
            </div>
              </Tab>
              <Tab eventKey="blockeduser" title="Blocked Users">
              <div className="col-12 ">
                <Form>
                    <Form.Group controlId="formBasicEmail mt-4" className="mt-3">
                      <Form.Control type="text" placeholder="Search"  onChange={(e)=>this.searchBlockeduser(e)} />
                    </Form.Group>
               </Form>
            </div>
              <div className="col-12 mycontactlist">
                  {blockeduser.filter((data)=>{
                    if(this.state.gotblocked == null)
                        return data
                    else if(data.name.toLowerCase().includes(this.state.gotblocked.toLowerCase())){
                        return data
                    }
                  }).map(({ name, id, status,time, img}) => (
                     <div  className="col-12 pt-2 contactinner">
                           <div className="logger_sidetab1">
                                    <img src={img} className="img-circle logger_singleuserimg"></img>
                           </div>
                            <div  className="logger_sidetab2">
                               <h6 className="logger_chatusername">{name}</h6>
                              <p className="logger_chatusertagline">{status}</p>
                          </div>
                       </div>
                    ))}
            </div>
              </Tab>
            </Tabs>
        </div>
      </div>
      )
    } 


  }