import React from 'react';
import '../../styles/styles.css'; 

const Comment = ({comment}) => (
  <li className="comment-text"> {comment.date} : [{comment.username}] : {comment.text}</li>
);

export default Comment;