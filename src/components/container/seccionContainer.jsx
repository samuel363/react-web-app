import React from 'react';
import PropTypes from 'prop-types';

import Label from '../label';

const SeccionContainer = ({ content, label }) => (
  <div className="seccion-container">
    <div className="seccion-container__label">
      <Label id={label} />
    </div>
    <div className="seccion-container__content">
      {content}
    </div>
  </div>
);

SeccionContainer.propTypes = {
  content: PropTypes.element,
  label: PropTypes.string,
};
SeccionContainer.defaultProps = {
  content: null,
  label: '',
};

export default SeccionContainer;
