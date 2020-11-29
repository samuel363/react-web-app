import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  InputLabel, Label, LoadingSpinner, SeccionContainer, ViewContainer,
} from '@/components';
import { clearError, getLogin } from '@/redux/action';
import getSelector from '@/redux/selectors';
import {
  error, loginLoading, token,
} from '@/redux/selectors/selectorsKeys';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [validLogin, setValidLogin] = React.useState(false);

  const loading = useSelector((state) => getSelector(state, loginLoading));
  const tokenLogin = useSelector((state) => getSelector(state, token));
  const errorLogin = useSelector((state) => getSelector(state, error));
  const disabled = (!email || !password);
  const setEmailLogin = (value) => {
    if (errorLogin) {
      dispatch(clearError());
    }
    if (validLogin) {
      setValidLogin(false);
    }
    setEmail(value);
  };
  const submit = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      dispatch(getLogin({ email, password }));
      setEmail(null);
      setPassword(null);
    } else {
      setValidLogin(true);
    }
  };
  const content = (
    <div className="login-container">
      <InputLabel onchange={(e) => setEmailLogin(e.target.value)} type="email" label="email" />
      <span className="login-container__label-error">{validLogin && <Label id="EmailInvalid" />}</span>
      <InputLabel onchange={(e) => setPassword(e.target.value)} type="password" label="password" />
      <button
        type="button"
        className="login-container__login-button"
        disabled={disabled}
        onClick={submit}
      >
        <Label id="login" />
      </button>
    </div>
  );
  if (tokenLogin) {
    return (
      <Redirect to="/home" />
    );
  }
  return (
    <ViewContainer>
      {!loading ? <SeccionContainer content={content} label="login" /> : <LoadingSpinner />}
      {errorLogin && (
      <span className="login-container__label-error">
        <Label id={errorLogin} />
      </span>
      )}
    </ViewContainer>
  );
};
export default Login;
