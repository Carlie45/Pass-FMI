import {connect} from 'react-redux';
import {login, register} from '../actions/auth';
import Home from '../components/home';

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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
