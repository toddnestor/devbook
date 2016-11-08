import { connect } from 'react-redux';
import Comments from './comments';
import { createComment,
         updateComment,
         deleteComment } from '../../actions/comment_actions';

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
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
