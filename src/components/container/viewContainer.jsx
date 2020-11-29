import React from 'react';
import PropTypes from 'prop-types';
import Label from '../label';

const ViewContainer = ({ children, classname }) => (
  <div className="view-container">
    <h1 className="view-container__title">
      <Label id="main.title" />
    </h1>
    <div className={`view-container__content ${classname}`}>
      { children }
    </div>
  </div>
);

ViewContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classname: PropTypes.string,
};
ViewContainer.defaultProps = {
  children: null,
  classname: '',
};

export default ViewContainer;
