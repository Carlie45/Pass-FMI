import {connect} from 'react-redux';
import {login, register, logout} from '../actions/auth';
import BaseTemplate from '../base-template';

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(BaseTemplate);
