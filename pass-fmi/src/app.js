import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './index.css';
import './app.css';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import BaseTemplate from './containers/BaseContainer';
import Home from './containers/HomeContainer';
import About from './components/about/about';
import Personal from './containers/PersonalContainer';
import Items from './containers/ItemsContainer';
import ItemsNew from './containers/ItemsNewContainer';
import ItemDetails from './containers/itemDetailsContainer';
import ItemsEdit from './containers/ItemsEditContainer';
import Users from './containers/usersContainer';
import UserDetails from './containers/userDetailsContainer';
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
        <Router history={history}/>
        <Route path="/" component={BaseTemplate} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/personal" component={Personal} />
        <Route path="/items" exact component={Items} />
        <Route path="/items-new" exact component={ItemsNew} />
        <Route path="/items-edit/:itemId" exact component={ItemsEdit} />
        <Route path="/items/:itemId" component={ItemDetails} />
        <Route path="/users" component={Users} />
        <Route path="/users/:username" component={UserDetails} />
      </div>
    );
  }
}

export default App;
