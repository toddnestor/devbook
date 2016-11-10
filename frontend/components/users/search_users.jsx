import React from 'react';
import SquareSpinner from '../utilities/square_spinner';
import FriendItem from '../items/friend_item';

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
    let {users, loading} = this.props;

    let userCount = users.length;

    return (
      <form onChange={this.updateSearchTerm} className="navbar-form navbar-right app-search users-search" role="search">
        <div className="form-group pos-r">
          <input type="text" className="form-control" placeholder="Search" />
          <ul style={{display: this.state.searchTerm ? 'block' : 'none'}}>
            <li style={{display: !users.length && !loading && this.state.searchTerm ? 'list-item' : 'none', borderBottom: '0'}}>No search results</li>
            <li style={{display: loading ? 'list-item' : 'none'}}>
              <SquareSpinner />
            </li>
            {
              users.map( (user, i) => <FriendItem key={user.id} style={{zIndex: userCount - i }} friend={user} noUsername={true} />)
            }
          </ul>
        </div>
      </form>
    );
  }
}

export default SearchUser;
