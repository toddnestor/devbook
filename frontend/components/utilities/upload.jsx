import React from 'react';
import Dropzone from 'react-dropzone';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalOpen});
  }

  onDrop(files) {
    console.log('the files ', files);
    let data = new FormData();

    $.each(files, function(key, value)
    {
        data.append(key, value);
    });

    $.ajax({
      method: 'POST',
      url: '/api/media_items',
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false,
      data,
      success: data => {
        console.log(data);
      }
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let { children } = this.props;

    return (
      <div onClick={this.toggleModal.bind(this)} className="upload-area">
        {children}
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <div>
            <Dropzone className="dropzone" onDrop={this.onDrop}>
              <div>
                Drop files here or click to upload.
              </div>
            </Dropzone>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Upload;
