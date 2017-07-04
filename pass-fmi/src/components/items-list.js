import React from 'react';
import Item from './item';
import '../../styles/styles.css'; 

const ItemsList  = (props) => (
<tbody>{
      props.items.map(
        item => (<Item key={item.id} item={item} />)
      )}
</tbody>
);

export default ItemsList;