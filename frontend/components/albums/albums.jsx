import React from 'react';
import LargeSpinner from '../utilities/large_spinner';

class Albums extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.fetchAlbums(this.props.user.id);
    }

    render() {
      let { children, loading } = this.props;

      return (
        <div className="container m-y-md albums">
          {loading ? <LargeSpinner className="col-md-offset-3 col-md-6" /> : children}
        </div>
      );
    }
}

export default Albums;
