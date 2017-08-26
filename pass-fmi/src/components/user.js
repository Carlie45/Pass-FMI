import React from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'

class User extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
       return (
        <tr>
            <td> {this.props.user.username}</td>
            <td> {this.props.user.firstName}</td>
            <td> {this.props.user.lastName}</td>
        </tr>
    )}
}

export default withRouter(User);