import React from 'react';
import { withRouter } from 'react-router-dom'

const Item = ({item}) => { return (
    // <tr onClick={ () => {this.context.router.transitionTo('/items/' + item.id)}}>
    <tr key={item.id}>
        {item.title && <td>{item.title}</td>}
        <td> {item.subject}</td>
        {item.user && <td> {item.user.username}</td>}
        {!item.user && <td> Anonymous </td>}
    </tr>
);}

export default withRouter(Item);
