import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import Personal from '../components/personal/personal';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getItems }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
