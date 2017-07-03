import React from 'react';
import { withRouter } from 'react-router-dom'

const Item = ({item}) => { return (
    // <tr onClick={ () => {this.context.router.transitionTo('/items/' + item.id)}}>
    <tr>
        <td> {item.title}</td>
        <td> {item.subject}</td>
        <td> {item.author}</td>
    </tr>
);}

export default withRouter(Item);