import React from 'react';
import CommentItem from '../items/comment_item';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
  }

  fetchMoreComments() {
    this.page++;
    this.props.fetchMoreComments(this.page);
  }

  render() {
    let { comments, currentUser, comment_count } = this.props;

    const isOwner = comment => comment.user.id === currentUser.id;

    return (
      <ul className="media-list m-b">
        <li onClick={this.fetchMoreComments.bind(this)} className="media text-center" style={{display: comments.length < comment_count ? 'list-item' : 'none', cursor: 'pointer'}}>
          <span className="icon icon-dots-three-horizontal"></span>
        </li>
        {
          comments.map( comment => <CommentItem comment={comment} key={comment.id} isOwner={isOwner(comment)} />)
        }
      </ul>
    );
  }
}

export default CommentList;
