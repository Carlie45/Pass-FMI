import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editItem } from '../actions/items';
import ItemsEdit from '../components/items/items-edit';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ editItem }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsEdit);
