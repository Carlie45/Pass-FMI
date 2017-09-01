import React from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'

import './index.css';

class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToDetailsView: false,
            selectedItemIndex: -1
        }
    }

    handleClick(itemId) {
        this.setState({selectedItemIndex : itemId});
        this.setState({redirectToDetailsView : true});
    }

    render() {
       if (this.state.redirectToDetailsView) {
         let url = '/items/' + this.state.selectedItemIndex;
         return <Redirect to={url} />;
       }

       return (
        <tr onClick={() => this.handleClick(this.props.item._id)}>
            <td className="user-item-col"> {this.props.item.title}</td>
            <td className="user-item-col"> {this.props.item.subject}</td>
            <td className="user-item-col"> {this.props.item.department}</td>
            <td className="user-item-col"> {this.props.item.price}</td>
        </tr>
    )}
}

export default withRouter(UserItem);
