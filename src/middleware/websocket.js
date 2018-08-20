import { WS_INIT, WS_CONNECT, WS_DISCONNECT, WS_SEND, WS_ONMESSAGE } from '../constants/websocket';

let ws = null;
let addr = null;
export default store => next => action => {
  switch (action.type) {
    case WS_INIT:
      addr = action.payload;
      break;
    case WS_CONNECT:
      ws = new WebSocket(addr);

      // TODO
      // ws.onopen = () => store.dispatch({ type: 'WEBSOCKET:OPEN' });
      // ws.onclose = (event) => store.dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      ws.onmessage = e => store.dispatch({ type: WS_ONMESSAGE, payload: e });
      break;

    case WS_SEND:
      ws.send(JSON.stringify(action.payload));
      break;

    case WS_DISCONNECT:
      ws.close();
      break;

    default:
      break;
  }

  return next(action);
};
