import React from 'react';
import CommentList from './comments-list';
import '../../styles/styles.css';
import PropTypes from 'prop-types';

class ItemDetails extends React.Component {
    componentWillMount() {
        this.props.actions.getItems();
    }

    constructor(props) {
        super(props);
        this.state = {
            newCommentText: 'Добавете коментар...',
            items: this.props.items
        }
    }
    
    getItemIndex = () => {
        let endInd = window.location.href.lastIndexOf('/');
        return window.location.href.substring(endInd+1);
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
        let dateStr = year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) 
            + " " + ("0" + (hours-3)).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

        this.props.actions.addComment(this.props.items[this.getItemIndex()]._id, "lili", this.state.newCommentText);

        let updatedItem = this.state.items[this.getItemIndex()];
        let lastCommentIndex = updatedItem.comments.length;
        let _id = updatedItem.comments[lastCommentIndex-1]._id + 1;
        console.log(updatedItem.comments)
        let newComment = {_id: _id, createdAt: dateStr, author: { username: "lili"}, content: this.state.newCommentText};
        let items = this.state.items;
        items[this.getItemIndex()].comments.push(newComment);
        this.setState({newCommentText: 'Добавете коментар...', items: items});
    }

    render() {
        return(
            <div>
                <div className="item-title">{this.props.items[this.getItemIndex()].title}</div>

                <table className="item-details-table">
                    <tbody>
                        <tr>
                            <td className="item-details-label">Автор:</td>
                            <td className="item-details-value">{this.props.items[this.getItemIndex()].author}</td>
                        </tr>
                        <tr>
                            <td className="item-details-label">Предметна област:</td>
                            <td className="item-details-value">{this.props.items[this.getItemIndex()].subject}</td>
                        </tr>
                        <tr>
                            <td className="item-details-label">Катедра:</td>
                            <td className="item-details-value">{this.props.items[this.getItemIndex()].department}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="author-details-table">
                    <tbody>
                        <tr>
                            <td className="author-details-label">Добавил:</td>
                            <td className="author-details-value">{this.props.items[this.getItemIndex()].user.username}</td>
                        </tr>
                        <tr>
                            <td className="author-details-label">Телефон:</td>
                            <td className="author-details-value">{this.props.items[this.getItemIndex()].user.phone}</td>
                        </tr>
                        <tr>
                            <td className="author-details-label">e-mail:</td>
                            <td className="author-details-value">{this.props.items[this.getItemIndex()].user.email}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="item-details-price">Цена: {this.props.items[this.getItemIndex()].price}</div>
                <br/>
                <h3 className="item-title">Коментари</h3>
                <CommentList comments={this.state.items[this.getItemIndex()].comments} actions={this.props.actions}/>
                <div className="add-comment-section">
                    <textarea className="add-comment-textarea" name="add-comment-area" onChange={this.handleChange} form="add-comments-form" value={this.state.newCommentText}></textarea>
                    <form id="add-comments-form" onSubmit={this.handleAddComment}>
                        <button id="add-comment-button" type="submit" className="btn btn-primary">Добави</button>
                    </form>
                </div>
            </div>
        );
    }
}

ItemDetails.propTypes = {
  actions: PropTypes.shape({
    getItems: PropTypes.func.isRequired,
    addComment: PropTypes.func,
    deleteComment: PropTypes.func
  }),
  items: PropTypes.array
}

export default ItemDetails;