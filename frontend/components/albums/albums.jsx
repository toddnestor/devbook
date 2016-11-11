import React from 'react';
import LargeSpinner from '../utilities/large_spinner';

class Albums extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      if( this.props.user && this.props.user.id ) {
        this.props.fetchAlbums(this.props.user.id);
      }
    }

    componentWillReceiveProps(newProps) {
      if( (!this.props.user || !this.props.user.id) && (newProps.user && newProps.user.id) ) {
        this.props.fetchAlbums(newProps.user.id);
      }
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
