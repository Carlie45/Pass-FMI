import React from 'react';
import { withRouter } from 'react-router-dom'
class UserItem extends React.Component {
    
    render() {
       return (
        <tr>
            <td className="user-item-col"> {this.props.item.title}</td>
            <td className="user-item-col"> {this.props.item.subject}</td>
            <td className="user-item-col"> {this.props.item.department}</td>
            <td className="user-item-col"> {this.props.item.price}</td>
        </tr>
    )}
}

export default withRouter(UserItem);
