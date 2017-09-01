import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import UserItemsList from './user-items-list';

class UserDetails extends React.Component {
    componentWillMount() {
          this.props.actions.getUser(this.getUserName());
//          this.props.actions.getUserItemsIds(this.getUserName());
          this.props.actions.getItems();
    }

    onBackButtonEvent = (e) => {
        e.preventDefault();
        document.getElementById('users').style.display = 'block';
    }

    componentDidMount () {
        window.onpopstate = this.onBackButtonEvent;
    }

    constructor(props) {
        super(props);
        document.getElementById('users').style.display = 'none';
    }

    getUserName = () => {
        let endInd = window.location.href.lastIndexOf('/');
        return window.location.href.substring(endInd+1);
    }

    getUserByUserName = () => {
        const username = this.getUserName();
        const users = this.props.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                return users[i];
            }
        }
        return {};
    }

    render() {
        return(
            <div className="user-details">
                <table className="user-details-table">
                    <tbody>
                        <tr>
                            <td className="user-details-label"><strong>Потребителско име</strong></td>
                            <td className="user-details-value">{this.props.user.username}</td>
                        </tr>
                        <tr>
                            <td className="user-details-label"><strong>Първо име</strong></td>
                            <td className="user-details-value"> {this.props.user.firstName}</td>
                        </tr>
                        <tr>
                            <td className="user-details-label"><strong>Фамилия</strong></td>
                            <td className="user-details-value"> {this.props.user.lastName}</td>
                        </tr>
                        <tr>
                            <td className="user-details-label"><strong>E-mail</strong></td>
                            <td className="user-details-value"> {this.props.user.email}</td>
                        </tr>
                        <tr>
                            <td className="user-details-label"><strong>Телефон</strong></td>
                            <td className="user-details-value"> {this.props.user.phone}</td>
                        </tr>
                        <tr>
                            <td className="user-details-label"><strong>Роля</strong></td>
                            <td className="user-details-value">{this.props.user.role}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <h2 className="user-item-title">Собствени учебни материали:</h2>
                <table className="user-items-table">
                    <thead>
                        <tr>
                            <th>Учебен материал</th>
                            <th>Предмет</th>
                            <th>Катедра</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <UserItemsList items={this.props.items} username={this.getUserName()}/>
                </table>
           </div>
        );
    }
}

UserDetails.propTypes = {
  actions: PropTypes.shape({
    getUser: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired
  }),
    user: PropTypes.object,
    items: PropTypes.array.isRequired,
}

export default UserDetails;
