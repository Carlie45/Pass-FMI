import React from 'react';
import CommentList from '../comments-list/comments-list';
import './index.css';
import PropTypes from 'prop-types';
import { find } from 'lodash'

class ItemDetails extends React.Component {
  componentWillMount() {
    if(this.props.items.length == 0) {
      this.props.actions.getItems();
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      newCommentText: 'Добавете коментар...'
    }
  }

  getItemIndex = () => {
      return this.props.match.params.itemId;
  }

  getItem = () => {
    return find(this.props.items, (item) => item._id == this.getItemIndex());
  }

  handleChange = (e) => {
    this.setState({newCommentText: e.target.value});
  }

  handleAddComment = (e) => {
      e.preventDefault();
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth()+1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      let dateStr = day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
      let newComment = {date: dateStr, username: "Guest", text: this.state.newCommentText};
      this.getItem().comments.push(newComment);

      this.setState({newComment: this.state.newCommentText});
  }

  handleEdit = (e) => {
    this.props.history.push(`/items-edit/${this.getItemIndex()}`);
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <div className="item-title">{this.getItem.title}</div>

        <table className="item-details-table">
            <tbody>
                <tr>
                    <td className="item-details-label">Автор:</td>
                    <td className="item-details-value">{this.getItem().author}</td>
                </tr>
                <tr>
                    <td className="item-details-label">Предметна област:</td>
                    <td className="item-details-value">{this.getItem().subject}</td>
                </tr>
                <tr>
                    <td className="item-details-label">Катедра:</td>
                    <td className="item-details-value">{this.getItem().department}</td>
                </tr>
            </tbody>
        </table>
        <table className="author-details-table">
            <tbody>
                <tr>
                    <td className="author-details-label">Добавил:</td>
                    <td className="author-details-value">{this.getItem().user.username}</td>
                </tr>
                <tr>
                    <td className="author-details-label">Телефон:</td>
                    <td className="author-details-value">{this.getItem().user.phone}</td>
                </tr>
                <tr>
                    <td className="author-details-label">e-mail:</td>
                    <td className="author-details-value">{this.getItem().user.email}</td>
                </tr>
            </tbody>
        </table>
        <div className="item-details-price">Цена: {this.getItem().price}</div>
        {this.props.user && (this.props.user.role == 'Admin' || this.props.user._id == this.getItem().user._id) && <button onClick={this.handleEdit}>
          Edit
        </button>}
        <br/>
        <h3 className="item-title">Коментари</h3>
        <CommentList comments={this.getItem().comments}/>
        {this.props.user && <div className="add-comment-section">
            <textarea className="add-comment-textarea" name="add-comment-area" onChange={this.handleChange} form="add-comments-form" value={this.state.newCommentText}></textarea>
            <form id="add-comments-form" onSubmit={this.handleAddComment}>
                <button id="add-comment-button" type="submit" className="btn btn-primary">Добави</button>
            </form>
        </div>}
      </div>
    );
  }
}

ItemDetails.propTypes = {
  actions: PropTypes.shape({
    getItems: PropTypes.func.isRequired
  }),
  items: PropTypes.array
}

export default ItemDetails;
