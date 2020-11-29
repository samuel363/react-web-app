import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Label = ({ id, values }) => (
  <FormattedMessage id={id} values={values} />
);
Label.defaultProps = {
  values: {},
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.object,
};

export default Label;
