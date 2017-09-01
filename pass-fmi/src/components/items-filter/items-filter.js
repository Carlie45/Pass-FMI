import React from 'react';
import PropTypes from 'prop-types';

import {uniq} from 'lodash'

import './index.css';

class ItemsFilter extends React.Component {
  subjectPicked = (event) => {
    this.props.filterBySubject(event.target.value);
  }

  findByOwnerName = (event) => {
    if (event.key === 'Enter') {
        this.props.filterByOwnerName(event.target.value);
    }
  }

  findByTitle = (event) => {
    if (event.key === 'Enter') {
        this.props.filterByTitle(event.target.value);
    }
  }

  getSubjects = () => {
    return uniq(this.props.items.map(item => item.subject));
  }

  getDepartments = () => {
    return uniq(this.props.items.map(item => item.department));
  }

  clearFilter = () => {
    this.props.getItems();
  }

  departmetPicked = (event) => {
    this.props.filterByDepartment(event.target.value);
  }

  render() {
    return (
      <div className="filter">
        <div className="pickers">
          <div className="selects">
            <label>Subject:</label>
            <select onChange={this.subjectPicked} className="form-control">
              <option disabled selected value> -- Избери -- </option>
            {
              this.getSubjects().map(function(subject, index) {
              return <option key={index}
                value={subject}>{subject}</option>;
              })
            }
            </select>

            <label>Department:</label>
            <select onChange={this.departmetPicked} className="form-control department">
              <option disabled selected value> -- Избери -- </option>
            {
              this.getDepartments().map(function(department, index) {
              return <option key={index}
                value={department}>{department}</option>;
              })
            }
            </select>
          </div>

          <div className="inputs">
            <label>Username:</label>
            <input className="form-control" type="text" onKeyUp={ e => {
              this.findByOwnerName(e);
            }}/>

            <label>Title:</label>
            <input className="form-control" type="text" onKeyUp={ e => {
              this.findByTitle(e);
            }}/>
          </div>
        </div>
        <div className="clear-container">
          <button className="clear-button btn-success btn-primary" onClick={this.clearFilter}>Изчисти</button>
        </div>
      </div>
    );
  }
}

ItemsFilter.propTypes = {
  items: PropTypes.array,
  filterBySubject: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  filterByDepartment: PropTypes.func.isRequired
}

export default ItemsFilter;
