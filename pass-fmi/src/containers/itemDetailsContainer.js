import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import { saveCommentToItem } from '../actions/items';
import ItemDetails from '../components/item-details';
import { addComment, deleteComment } from '../actions/comments';

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getItems, addComment, deleteComment }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
