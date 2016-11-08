import { connect } from 'react-redux';
import CommentActions from './comment_actions';
import { updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentActions);
