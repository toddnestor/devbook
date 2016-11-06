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
      modalIsOpen: false,
      loading: false
    };

    this.options = _.merge( {
      callback: files => console.log(files),
      multiple: true,
      accept: 'image/*'
    }, this.props );
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  finishLoading() {
    this.setState({loading: false});
  }

  startLoading() {
    this.setState({loading: true});
  }

  toggleModal(e) {
    e.stopPropagation();
    this.setState({modalIsOpen: !this.state.modalOpen});
  }

  onDrop(files) {
    this.startLoading();

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
        this.options.callback(data);
        this.finishLoading();
        this.closeModal();
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
    let { children, className, style } = this.props;
    let { loading } = this.state;

    return (
      <div onClick={this.toggleModal.bind(this)} className={`upload-area ${className}`} style={style}>
        {children}
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles}
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={!loading}
          >
          <div>
            <div style={{display: loading ? 'block' : 'none'}} className="dropzone-loading">
              <div className="loader">
              </div>
            </div>
            <div style={{display: loading ? 'none' : 'block'}}>
              <Dropzone multiple={this.options.multiple} accept={this.options.accept} className="dropzone" activeClassName="dropzone-dragging" onDrop={this.onDrop.bind(this)}>
                <div>
                  Drop file{this.options.multiple ? 's' : ''} here or click to upload.
                </div>
              </Dropzone>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Upload;
