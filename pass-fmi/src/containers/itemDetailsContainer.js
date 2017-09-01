import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/items';
import ItemDetails from '../components/items/item-details';
import { saveCommentToItem } from '../actions/items';
import { addComment, deleteComment } from '../actions/comments';

function mapStateToProps(state) {
  return {
    items: state.items,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getItems, deleteItem, addComment, deleteComment }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
