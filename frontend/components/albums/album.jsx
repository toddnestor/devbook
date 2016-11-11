import React from 'react';
import LargeSpinner from '../utilities/large_spinner';

class Album extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  render () {
    let { children, loading, album = {} } = this.props;
    return (
      <div className="container m-y-md album">
        <h1 className="text-center">{album.title}</h1>
        <p className="text-center">{album.description}</p>
        {loading ? <LargeSpinner className="col-md-offset-3 col-md-6" /> : children}
      </div>
    )

  }
}

export default Album;
