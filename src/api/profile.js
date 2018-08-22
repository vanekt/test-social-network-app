import { apiVersion, getOptions, toJson, errorToTransport } from './common';

export default class {
  constructor(apiUrl, version = apiVersion) {
    this.url = apiUrl + '/api/' + version;
  }

  getUserById = userId => {
    return fetch(this.url + '/users/' + userId, getOptions)
      .then(toJson)
      .catch(errorToTransport);
  };

  getAll = () => {
    return fetch(this.url + '/users', getOptions)
      .then(toJson)
      .catch(errorToTransport);
  };
}
