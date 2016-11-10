import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.conductSearch = _.debounce(() => {
      this.props.searchUsers(this.state.searchTerm);
    }, 250);
  }

  updateSearchTerm(e) {
    this.setState({searchTerm: e.target.value});
    this.conductSearch();
  }

  render() {
    return (
      <form onChange={this.updateSearchTerm} className="navbar-form navbar-right app-search" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </form>
    );
  }
}

export default SearchUser;
