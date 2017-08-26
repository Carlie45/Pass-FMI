import React from 'react';
import '../../styles/styles.css';
import PropTypes from 'prop-types';

class UserDetails extends React.Component {
    componentWillMount() {
//        this.props.actions.getUsers();
          console.log(this.props);
          this.props.actions.getUser(this.getUserName());
    }

    constructor(props) {
        super(props);
    }
    
    getUserName = () => {
        let endInd = window.location.href.lastIndexOf('/');
        return window.location.href.substring(endInd+1);
    }

    render() {
        return(
            <div>
                <div className="item-title">{this.props.user[0].username}</div>

                <table className="item-details-table">
                    <tbody>
                        <tr>
                            <td className="item-details-label">Име:</td>
                            <td className="item-details-value">{this.props.user[0].firstName}</td>
                        </tr>
                        <tr>
                            <td className="item-details-label">Фамилия:</td>
                            <td className="item-details-value">{this.props.user[0].lastName}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
           </div>
        );
    }
}

UserDetails.propTypes = {
  actions: PropTypes.shape({
//    getUsers: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
  }),
//    users: PropTypes.array,
    user: PropTypes.array
}

export default UserDetails;