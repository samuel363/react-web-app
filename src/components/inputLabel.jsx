import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Label from './label';

const InputLabel = ({ label, type, onchange }) => (
  <div className="input-label-container">
    <span className="input-label-container__label">
      <Label id={label} />
    </span>
    <FormattedMessage id={label}>
      {(placeholder) => (
        <input
          className="input-label-container__input form-control"
          maxLength={20}
          onChange={onchange}
          placeholder={placeholder}
          type={type}
        />
      )}
    </FormattedMessage>
  </div>
);

InputLabel.defaultProps = {
  label: '',
  type: 'text',
  onchange: null,
};

InputLabel.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onchange: PropTypes.func,
};

export default InputLabel;
