import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class Post extends Component {
    constructor(props) {
      super(props);

      this.state = {
        post: props.content,
        show: false
      }
    }
    
    render() { 
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  
        return (
          <div>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading - {this.state.post.id}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
  }
   
  export default Post;

  // export default Post