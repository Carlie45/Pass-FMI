import React, { Component } from 'react';
import './base-template.css';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

@connect()
class BaseTemplate extends Component {
  logout = (e) => {
    this.props.logout();
    this.props.history.push('/home');
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <ul className="main-menu">
          <li><Link to="/home">Начало</Link></li>
          <li><Link to="/about">Мисия</Link></li>
          {this.props.user && <li><Link to="/personal">Лични данни</Link></li>}
          <li><Link to="/items">Учебни материали</Link></li>
          {this.props.user && this.props.user.role === 'Admin' && <li><Link to="/users">Потребители</Link></li>}
          {this.props.user && <li onClick={this.logout}><span className="logout-nav">Изход</span></li>}
        </ul>
        <hr />
        <div className="base">
          <div className="base-header">
            <h2 className="title">Pass FMI</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseTemplate;
