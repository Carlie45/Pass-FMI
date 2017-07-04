import React from 'react';
import CommentList from './comments-list';
import '../../styles/styles.css'; 

var itemsArr = require('./items');

class ItemDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: itemsArr.items,
            newCommentText: 'Добавете коментар...'
        }
    }

    getItemIndex = () => {
        let endInd = window.location.href.lastIndexOf('/');
        return window.location.href.substring(endInd+1);
    }

    handleChange = (e) => {
        this.setState({newCommentText: e.target.value,
                        items: this.state.items});
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
        itemsArr.items[this.getItemIndex()-1].comments.push(newComment);

        this.setState({ items: itemsArr.items,
                        newComment: this.state.newCommentText});
    }

    render() {
        return(
            <div>
                <div className="item-title">{itemsArr.items[this.getItemIndex()-1].title}</div>

                <table className="item-details-table">
                    <tbody>
                        <tr>
                            <td className="item-details-label">Автор:</td>
                            <td className="item-details-value">{itemsArr.items[this.getItemIndex()-1].author}</td>
                        </tr>
                        <tr>
                            <td className="item-details-label">Предметна област:</td>
                            <td className="item-details-value">{itemsArr.items[this.getItemIndex()-1].subject}</td>
                        </tr>
                        <tr>
                            <td className="item-details-label">Катедра:</td>
                            <td className="item-details-value">{itemsArr.items[this.getItemIndex()-1].department}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="author-details-table">
                    <tbody>
                        <tr>
                            <td className="author-details-label">Добавил:</td>
                            <td className="author-details-value">{itemsArr.items[this.getItemIndex()-1].username}</td>
                        </tr>
                        <tr>
                            <td className="author-details-label">Телефон:</td>
                            <td className="author-details-value">{itemsArr.items[this.getItemIndex()-1].phone}</td>
                        </tr>
                        <tr>
                            <td className="author-details-label">e-mail:</td>
                            <td className="author-details-value">{itemsArr.items[this.getItemIndex()-1].email}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="item-details-price">Цена: {itemsArr.items[this.getItemIndex()-1].price}</div>
                <br/>
                <h3 className="item-title">Коментари</h3>
                <CommentList comments={itemsArr.items[this.getItemIndex()-1].comments}/>
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

export default ItemDetails;