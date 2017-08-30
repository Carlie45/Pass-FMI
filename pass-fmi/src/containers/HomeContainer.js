import {connect} from 'react-redux';
import {login, register, logout} from '../actions/auth';
import Home from '../components/home/home';

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password, nextPath) => {
      dispatch(login(username, password, nextPath));
    },
    register: (user, nextPath) => {
      dispatch(register(user,nextPath));
    },
    logout: () => {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
