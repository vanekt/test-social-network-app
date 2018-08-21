import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { loginRequest } from '../../actions/user';
import styles from './CheckAuth.module.scss';

const mapStateToProps = store => ({
  isInit: store.user.isInit,
  userId: store.user.id,
  loginFormError: store.user.loginFormError
});

const mapDispatchToProps = dispatch => ({
  sendLoginRequest: payload => dispatch(loginRequest(payload))
});

export default Component => {
  const WrappedComponent = ({
    isInit,
    userId,
    username,
    updateUsername,
    password,
    updatePassword,
    submitLoginForm,
    loginFormError,
    ...props
  }) => {
    if (!isInit) {
      return 'Loading...'; // TODO use spinner
    }

    if (userId === null) {
      return (
        <div className={styles.checkAuth}>
          <form onSubmit={submitLoginForm} className={styles.form}>
            <label>
              Login
              <input
                autoFocus
                type="text"
                onChange={e => {
                  updateUsername(e.target.value);
                }}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                onChange={e => {
                  updatePassword(e.target.value);
                }}
              />
            </label>

            <p className={styles.error}>{loginFormError}</p>

            <button type="submit">Log in</button>
          </form>
        </div>
      );
    }

    return <Component {...props} />;
  };

  const enhance = compose(
    withState('username', 'updateUsername', ''),
    withState('password', 'updatePassword', ''),
    withHandlers({
      submitLoginForm: props => e => {
        const { username, password, sendLoginRequest } = props;
        e.preventDefault();
        sendLoginRequest({ username, password });
      }
    })
  );

  const WrappedComponentEnhanced = enhance(WrappedComponent);
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponentEnhanced);
};
