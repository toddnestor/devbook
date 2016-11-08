import { RECEIVE_FEED } from '../actions/feed_actions';
import { RECEIVE_ACTIVITY, UPDATE_ACTIVITY, REMOVE_ACTIVITY } from '../actions/activity_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';
import { RECEIVE_COMMENT,
         RECEIVE_UPDATED_COMMENT,
         REMOVE_COMMENT } from '../actions/comment_actions';

const _defaultState = [];
import merge from 'lodash/merge';

const FeedReducer = (state = _defaultState, action) => {
  let duped = merge([], state);
  let searchParams;
  let commentedActivity;

  switch( action.type ) {
    case RECEIVE_FEED:
      return action.feed;
    case RECEIVE_ACTIVITY:
      duped.unshift(action.activity);
      return duped;
    case UPDATE_FRIENDSHIP_STATUS:
      duped = duped.map( activity => {
        if( activity.user.id === action.user.id) {
          activity.user.friend_status = action.status;
          activity.user.friend_count++;
        }

        if( activity.wall_user && activity.wall_user.id === action.user.id) {
          activity.wall_user.friend_status = action.status;
          activity.wall_user.friend_count++;
        }

        return activity;
      });

      return duped;
    case UPDATE_ACTIVITY:
      duped = duped.map( activity => {
        if( activity.id === action.activity.id) {
          activity.feedable = action.activity.feedable;
          activity.media_items = action.activity.media_items;
        }

        return activity;
      });

      return duped;
    case REMOVE_ACTIVITY:
      let activityToRemove = _.find(duped, {id: action.activity.id});

      if( activityToRemove ) {
        duped = _.without(duped, activityToRemove);
      }
      return duped;
    case RECEIVE_COMMENT:
      switch( action.comment.commentable_type ) {
        case 'Status':
          searchParams = {
            feedable_type: action.comment.commentable_type,
            feedable_id: action.comment.commentable_id
          };
          break;
        default:
          searchParams = {id: action.comment.commentable_id};
      }

      commentedActivity = _.find(duped, searchParams);

      if( commentedActivity ) {
        commentedActivity.comments.push( action.comment );
      }

      return duped;
    case RECEIVE_UPDATED_COMMENT:
      switch( action.comment.commentable_type ) {
        case 'Status':
          searchParams = {
            feedable_type: action.comment.commentable_type,
            feedable_id: action.comment.commentable_id
          };
          break;
        default:
          searchParams = {id: action.comment.commentable_id};
      }

      commentedActivity = _.find(duped, searchParams);

      if( commentedActivity ) {
        let comment = _.find(commentedActivity.comments, {id: action.comment.id});
        if( comment ) {
          comment.text = action.comment.text;
          comment.media_items = action.comment.media_items;
        }
      }

      return duped;
    case REMOVE_COMMENT:
      switch( action.comment.commentable_type ) {
        case 'Status':
          searchParams = {
            feedable_type: action.comment.commentable_type,
            feedable_id: action.comment.commentable_id
          };
          break;
        default:
          searchParams = {id: action.comment.commentable_id};
      }

      commentedActivity = _.find(duped, searchParams);

      if( commentedActivity ) {
        let comment = _.find(commentedActivity.comments, {id: action.comment.id});
        if( comment ) {
          commentedActivity.comments = _.without(commentedActivity.comments, comment);
        }
      }

      return duped;
    default:
      return state;
  }
}

export default FeedReducer;
