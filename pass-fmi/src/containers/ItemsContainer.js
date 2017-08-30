import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, filterBySubject, filterByDepartment, filterByOwnerName, filterByTitle} from '../actions/items';
import Items from '../components/items/items';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getItems,
      filterBySubject,
      filterByDepartment,
      filterByOwnerName,
      filterByTitle
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
