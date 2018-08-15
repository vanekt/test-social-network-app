import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { loginRequest } from '../../actions/user';

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
    loginFormError
  }) => {
    if (!isInit) {
      return 'Loading...'; // TODO use spinner
    }

    if (userId === null) {
      return (
        <div className="CheckAuth">
          <h1>Войдите, чтобы продолжить</h1>
          <form onSubmit={submitLoginForm}>
            <input
              autoFocus
              type="text"
              onChange={e => {
                updateUsername(e.target.value);
              }}
            />
            <input
              type="password"
              onChange={e => {
                updatePassword(e.target.value);
              }}
            />
            <button type="submit">LOGIN</button>
          </form>
          <p>{loginFormError}</p>
        </div>
      );
    }

    return <Component />;
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
