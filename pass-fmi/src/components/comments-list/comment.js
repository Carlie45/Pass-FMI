import React from 'react';
import './index.css';

const Comment = ({comment}) => (
  <li className="comment-text"> {comment.date} : [{comment.username}] : {comment.text}</li>
);

export default Comment;
