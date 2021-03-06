import { apiVersion, getOptions, toJson, errorToTransport } from './common';

export default class {
  constructor(apiUrl, version = apiVersion) {
    this.url = apiUrl + '/api/' + version;
  }

  getDialogsByUserId = userId => {
    return fetch(this.url + '/dialogs/' + userId, getOptions)
      .then(toJson)
      .catch(errorToTransport);
  };

  getDialogMessages = (userId, peerId) => {
    return fetch(`${this.url}/messages/${userId}/${peerId}`, getOptions)
      .then(toJson)
      .catch(errorToTransport);
  };
}
