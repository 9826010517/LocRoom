import React from 'react';
import { Form } from 'react-bootstrap';
import { Tabs,Tab } from 'react-bootstrap';
import { Button,Modal } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

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
        <Modal show={isOpen} onHide={hideModal} >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="text-center">
                <h6 className=""> Create New Group </h6>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                   <div className="col-12">
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
                       <Showgrouplist />
                     </div>
                     </div>
                     <div className="col-6">

                     </div>
                   </div>
            </div>
            
            </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };


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
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hi test1</Modal.Title>
          </Modal.Header>
          <Modal.Body>The body</Modal.Body>
          <Modal.Footer>
             <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

       


  // ++++++++

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
           arr : [{"id":"1","name":"amit mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"2","name":"amit mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"3","name":"amit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
          {"id":"4","name":"amit mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
        ]
        };
      }

      render() {
        const { arr } = this.state;
        return (
          <div className="grouplisdetail">
             {arr.map(({ name, id, status,time, img}) => (
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
        )
     
        
      }
  }