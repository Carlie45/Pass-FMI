import React from 'react';
import { Redirect } from 'react-router'

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
        <tr onClick={() => this.handleClick(this.props.item.id)}>
            <td> {this.props.item.title}</td>
            <td> {this.props.item.subject}</td>
            <td> {this.props.item.author}</td>
        </tr>
    )}
}

export default Item;