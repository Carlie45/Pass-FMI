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
import About from './components/about/about';
import UserData from './components/personal/personal';
import Items from './containers/ItemsContainer';
import ItemsNew from './containers/ItemsNewContainer';
import ItemDetails from './containers/itemDetailsContainer';
import ItemsEdit from './containers/ItemsEditContainer';
import Users from './containers/usersContainer';

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
          <li><Link to="/users">Потребители</Link></li>
        </ul>
        <hr />
        <Router history={history}/>
        <Route path="/" component={BaseTemplate} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/personal" component={UserData} />
        <Route path="/items" exact component={Items} />
        <Route path="/items-new" exact component={ItemsNew} />
        <Route path="/items-edit/:itemId" exact component={ItemsEdit} />
        <Route path="/items/:itemId" component={ItemDetails} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
