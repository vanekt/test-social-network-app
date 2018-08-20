import { WS_CONNECT, WS_SEND, WS_DISCONNECT, WS_INIT } from '../constants/websocket';

export const initWS = url => ({
  type: WS_INIT,
  payload: url
});

export const connectWS = () => ({
  type: WS_CONNECT
});

export const sendWS = payload => ({
  type: WS_SEND,
  payload
});

export const disconnectWS = () => ({
  type: WS_DISCONNECT
});
