import React, { Component } from 'react';
import './base-template.css';
import { connect } from 'react-redux';

@connect()
class BaseTemplate extends Component {
  render() {
    return (
      <div className="base">
        <div className="base-header">
          <h2 className="title">Pass FMI</h2>
        </div>
      </div>
    );
  }
}

export default BaseTemplate;
