import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../../actions/user';

const mapStateToProps = store => ({
  isInit: store.user.isInit,
  userId: store.user.userId
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(loginRequest(payload))
});

export default Component => {
  const WrappedComponent = ({ isInit, userId, login }) => {
    if (!isInit) {
      return 'Loading...'; // TODO use spinner
    }

    if (userId === null) {
      return (
        <div className="CheckAuth">
          <h1>Войдите, чтобы продолжить</h1>
          <p>Тут форма входа</p>
          <button
            onClick={() => {
              login({ username: 'admin', password: 'admin' });
            }}
          >
            LOGIN
          </button>
        </div>
      );
    }
    return <Component />;
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};
