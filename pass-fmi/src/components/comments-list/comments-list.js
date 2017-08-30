import React from 'react';
import Comment from './comment';
import './index.css';

const CommentsList  = (props) => (
<ol>{
      props.comments.map(
        comment => (<Comment key={comment._id} comment={comment} />)
      )}
</ol>
);

export default CommentsList;