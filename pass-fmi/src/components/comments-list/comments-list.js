import React from 'react';
import SingleComment from './comment';

import './index.css';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <ol>{
          this.props.comments.map(
            comment => (<SingleComment key={comment._id} comment={comment} actions={this.props.actions} user={this.props.user}/>)
          )}
    </ol>
    )}
}

export default CommentsList;
