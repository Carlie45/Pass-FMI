import React, { Component } from 'react';
import logo from './logo.svg';
import './base-template.css';
import { connect } from 'react-redux';

@connect()
class BaseTemplate extends Component {
  render() {
    return (
      <div className="base">
        <div className="base-header">
          <img src={logo} className="base-logo" alt="logo" />
          <h2>Pass FMI</h2>
        </div>
        <p className="base-intro">
        </p>
      </div>
    );
  }
}

export default BaseTemplate;
