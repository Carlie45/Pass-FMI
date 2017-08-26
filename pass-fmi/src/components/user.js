import React from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToDetailsView: false,
            selectedUser: -1
        }
    }

    handleClick(username) {
        this.setState({selectedUser : username, redirectToDetailsView : true});
    }

    render() {
         if (this.state.redirectToDetailsView) {
            let url = '/users/' + this.state.selectedUser;
            return <Redirect to={url} />;
        }

       return (
        <tr onClick={() => this.handleClick(this.props.user.username)}>
            <td> {this.props.user.username}</td>
            <td> {this.props.user.firstName}</td>
            <td> {this.props.user.lastName}</td>
        </tr>
    )}
}

export default withRouter(User);