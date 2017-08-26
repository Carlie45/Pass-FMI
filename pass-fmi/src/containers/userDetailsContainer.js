import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { getUsers } from '../actions/users';
import { getUser } from '../actions/user';
import UserDetails from '../components/user-details';

function mapStateToProps(state) {
  return {
//    users: state.users
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ 
//        getUsers: () => dispatch(getUsers()),
        getUser: (username) => { dispatch(getUser(username))}
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
