import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import Items from '../components/items';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  console.log(getItems);
  return {
    actions: bindActionCreators({ getItems }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
