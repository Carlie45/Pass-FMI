import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import ItemsNew from '../components/items-new';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addItem }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsNew);
