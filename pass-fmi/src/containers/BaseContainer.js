import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import BaseTemplate from '../base-template';

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseTemplate);
