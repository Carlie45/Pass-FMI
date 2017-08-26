import React from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import './index.css';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToDetailsView: false,
            selectedItemIndex: -1,
            onBack: false
        }
    }

    onBackButtonEvent = () => {

    }

    componentDidMount = () => {
        // if(window.onpopstate) {
        //     console.log("onpopstate");
        //     this.setState({onBack : true});
        //     this.setState({selectedItemIndex : -1});
        //     this.setState({redirectToDetailsView : false});
        // }
    }

    handleClick(itemId) {
        this.setState({selectedItemIndex : itemId});
        this.setState({redirectToDetailsView : true});
    }

    render() {

        if (this.state.redirectToDetailsView) {
            let url = '/items/' + this.state.selectedItemIndex;
            return <Redirect to={url} />;
        }

        // if (window.onpopstate) {
        //     return <Redirect to={'/items'}/>;
        // }

       return (
        <tr onClick={() => this.handleClick(this.props.item._id)}>
            { this.props.item.title && <td> {this.props.item.title}</td>}
            <td> {this.props.item.subject}</td>
            {this.props.item.user && <td> {this.props.item.user.username}</td>}
            {!this.props.item.user && <td> Anonymous </td>}
        </tr>
    )}
}

// export default Item;
export default withRouter(Item);
/*=======
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
>>>>>>> cb7436b3aa12f572714b5a4c8d0bdf60550d2b5b*/
