import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './index.css';

const UserData = (props) => {
  return (
    <div>
      <p className="paragraph-body">Име: {props.match.params.firstName}</p>
      <p className="paragraph-body">Фамилия: {props.match.params.lastName}</p>
      <p className="paragraph-body">e-mail: {props.match.params.email}</p>
      <h4 className="paragraph-title">Качени обяви за учебни материали: {props.match.params.ownItems}</h4>
    </div>
  );
}

UserData.propTypes = {
  params: PropTypes.object
}

export default connect()(UserData);
