import React from 'react';
import {Modal,Button} from 'react-bootstrap/'


class SelectedBeast extends React.Component {

  

  render() {
    return (
      <div>
        <Modal  show={this.props.openit} onHide={this.props.closit}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.titleModal}</Modal.Title>
           
          </Modal.Header>
          <Modal.Body>
          <img style={{ width: '100%'}}variant="top" src={this.props.imageModal}></img>
            <h2>{this.props.titleModal}</h2>
            <p>{this.props.descriptionModal}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"onClick={this.props.closit} >
              Close
          </Button>
            
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

export default SelectedBeast;