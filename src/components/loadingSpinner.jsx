import { range } from 'lodash';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

const LoadingSpinner = () => (
  range(6).map((item) => (
    <Spinner
      key={item}
      animation="border"
      role="status"
      style={{ width: `${item}rem`, height: `${item}rem`, marginRight: '1rem' }}
    />
  ))
);
export default LoadingSpinner;
