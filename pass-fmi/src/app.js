import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './index.css';
import './app.css';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import BaseTemplate from './base-template';
import Home from './containers/HomeContainer';
import About from './components/about';
import UserData from './components/personal';
import Items from './containers/ItemsContainer';
import ItemDetails from './components/item-details';
import Topics from './components/topics';
import ShowTheLocation from './components/show-location'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {withRouter} from 'react-router';

let history = createBrowserHistory();

@withRouter
@connect()
class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        <ul className="main-menu">
          <li><Link to="/home">Начало</Link></li>
          <li><Link to="/about">Мисия</Link></li>
          <li><Link to="/personal">Лични данни</Link></li>
          <li><Link to="/items">Учебни материали</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/show-location">Show the Location</Link></li>
        </ul>
        <hr />
        <Router history={history}/>
        <Route path="/" component={BaseTemplate} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/personal" component={UserData} />
        <Route path="/items" exact component={Items} />
        <Route path="/items/:itemId" component={ItemDetails} />
        <Route path="/topics" component={Topics} />
        <Route path="/show-location" component={ShowTheLocation} />
      </div>
    );
  }

  handleSerch = (event) => {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    // this.context.router.history.push(path);
    // Now you can dispatch navigation actions from anywhere!
    this.props.dispatch(push(path));
  }

}

export default App;
