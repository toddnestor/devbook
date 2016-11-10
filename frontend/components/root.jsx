import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import EditProfileContainer from './profile/edit_profile_container';
import ProfileContainer from './profile/profile_container';
import PostsContainer from './profile/posts_container';
import PhotosContainer from './profile/photos_container';
import FriendsContainer from './profile/friends_container';
import UsersContainer from './users/users_container';
import PhotosList from './profile/photos_list';

// Album components
import AlbumsContainer from './albums/albums_container';
import AlbumsIndexContainer from './albums/albums_index_container';
import AlbumCreationContainer from './albums/album_creation_container';
import AlbumContainer from './albums/album_container';
import AlbumPhotos from './albums/album_photos';
import PhotoContainer from './albums/photo_container';
import AlbumEditingContainer from './albums/album_editing_container';


class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.onpopstate = () => {
      // not sure why this fixes the issue...but it does
      return false;
    }
  }

  render() {
    let { store } = this.props;

    const _redirectIfLoggedIn = (nextState, replace) => {
      if( store.getState().session.currentUser ) {
        replace('/');
      }
    }

    const _redirectUnlessLoggedIn = (nextState, replace) => {
      if( !store.getState().session.currentUser ) {
        replace('/login');
      }
    }

    return (
      <Provider store={store}>
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/" component={App} onEnter={_redirectUnlessLoggedIn}>
            <IndexRoute component={HomeContainer} />
            <Route path="users" component={UsersContainer} />
            <Route path="edit-profile" component={EditProfileContainer} />
            <Route path="albums" component={AlbumsContainer}>
              <IndexRoute component={AlbumsIndexContainer} />
              <Route path="new" component={AlbumCreationContainer} />
              <Route path=":album_id" component={AlbumContainer}>
                <IndexRoute component={AlbumPhotos} />
                <Route path="edit" component={AlbumEditingContainer} />
                <Route path=":photo_id" component={PhotoContainer} />
              </Route>
            </Route>
            <Route path=":username" component={ProfileContainer}>
              <IndexRoute component={PostsContainer} />
              <Route path="photos" component={PhotosContainer}>
                <IndexRoute component={PhotosList} />
                <Route path="albums" component={AlbumsIndexContainer}>
                  <Route path=":album_id" component={AlbumContainer}>
                    <IndexRoute component={AlbumPhotos} />
                    <Route path=":photo_id" component={PhotoContainer} />
                  </Route>
                </Route>
              </Route>
              <Route path="friends" component={FriendsContainer} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;

/*
<IndexRoute component={SearchContainer} />
<Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
<Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
<Route path="benches/new" component={BenchFormContainer} />
*/
