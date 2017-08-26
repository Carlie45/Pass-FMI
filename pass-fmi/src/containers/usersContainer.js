import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import Users from '../components/users';

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getUsers }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
