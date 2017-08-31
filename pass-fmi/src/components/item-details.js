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

    getItem = () => {
        const index = this.getItemIndex();
        return this.props.items.filter(function(item){ return (item._id == index)})[0];
    }

    handleChange = (e) => {
        this.setState({newCommentText: e.target.value});
    }

    handleAddComment = (e) => {
        e.preventDefault();

        this.props.actions.addComment(this.props.items[this.getItemIndex()]._id, "lili", this.state.newCommentText);
        this.setState({newCommentText: 'Добавете коментар...'});
    }

    render() {
        return(
            <div>
                <div className="item-title">{this.getItem().title}</div>

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
                <br/>
                <h3 className="item-title">Коментари</h3>
                <CommentList comments={this.getItem().comments} actions={this.props.actions}/>
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