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

const Root = ({ store }) => {
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
          <Route path=":username" component={ProfileContainer}>
            <IndexRoute component={PostsContainer} />
            <Route path="photos" component={PhotosContainer} />
            <Route path="friends" component={FriendsContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;

/*
<IndexRoute component={SearchContainer} />
<Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
<Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
<Route path="benches/new" component={BenchFormContainer} />
*/
