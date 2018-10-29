import React from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';

export class Popup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    //   this.handleShow = this.handleShow.bind(this);
    //   this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false ,
       
      };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.modalState !== state.show) {
            return {
                show: props.modalState
            };
        }
        return null;
    }
    
    
    handleClose=()=> {
      this.setState({ show: false });
      this.props.onClose();
    }
  
   
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <p>Click to get the full Modal experience!</p>
  
          
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.information}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <h4>Popover in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={popover}>
                  <a href="#popover">popover</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <hr />
  
              <h4>Overflowing text to show scroll behavior</h4>
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
}