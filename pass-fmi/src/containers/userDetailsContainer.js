import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { getUsers } from '../actions/users';
import { getUser } from '../actions/user';
import UserDetails from '../components/user-details/user-details';
import { getItems } from '../actions/items';
import { getUserItemsIds } from '../actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
    items: state.items,
    userItemsIds: state.userItemsIds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
        getUser, getItems, getUserItemsIds
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
