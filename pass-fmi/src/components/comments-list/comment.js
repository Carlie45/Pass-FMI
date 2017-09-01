import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SingleComment extends React.Component {

  constructor(props) {
    super(props);
  }

  getItemIndex = () => {
      let endInd = window.location.href.lastIndexOf('/');
      return window.location.href.substring(endInd+1);
  }

  handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    this.props.actions.deleteComment(this.getItemIndex(), e.target.id);
  }

  render() {
    return (
      <li id={"comment-id-"+this.props.comment._id} key={this.props.comment._id} className="comment-text"> {this.props.comment.createdAt.substring(0,10) + " " + this.props.comment.createdAt.substring(11,19)}
        : [{this.props.comment.author.username}] : {this.props.comment.content}
        <button id={this.props.comment._id} onClick={this.handleDelete} className="glyphicon glyphicon-remove pull-right"/>
      </li>
  )}
}

SingleComment.propTypes = {
  actions: PropTypes.shape({
    deleteComment: PropTypes.func
  }),
  item: PropTypes.object
}

export default SingleComment;
