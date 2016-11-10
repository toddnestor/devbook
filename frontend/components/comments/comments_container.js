import { connect } from 'react-redux';
import Comments from './comments';
import { createComment,
         updateComment,
         deleteComment,
         fetchMoreComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {activity}) => ({
  createComment: comment => {
    if( activity.feedable_type == 'Status' ) {
      comment.commentable_type = activity.feedable_type;
      comment.commentable_id = activity.feedable_id;
    } else {
      comment.commentable_type = 'Activity';
      comment.commentable_id = activity.id;
    }
    dispatch(createComment(comment));
  },
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  fetchMoreComments: page => {
    let type, id;
    if( activity.feedable_type == 'Status' ) {
      type = activity.feedable_type;
      id = activity.feedable_id;
    } else {
      type = 'Activity';
      id = activity.id;
    }

    dispatch(fetchMoreComments(type, id, page, activity.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
