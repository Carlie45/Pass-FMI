import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import ItemDetails from '../components/items/item-details';

function mapStateToProps(state) {
  return {
    items: state.items,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getItems }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
