import axios from 'axios'
import utils from './../utils/utils.js'

const host = 'http://112.74.36.142';

const isUrlExist = data => !!data.url;

axios.defaults.withCredentials = true;

const Server = {
  get(options) {
    if (!isUrlExist(options)) {
      console.log('参数错误');
      return false;
    }

    return axios.get(host + options.url, options.data || {})
      .then(data => {
        return data.data;
      })
      .catch(err => {
        throw Error(`${options.url}请求出错`)
      })
  },

  post(options) {
    if (!isUrlExist(options)) {
      console.log('参数错误');
      return false;
    }

    if (!options.headers) {
        options.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    if (options.data) {
      options.data = utils.formatData(options.data);
    }

    return axios.post(host + options.url, options.data, options.config || {})
      .then(data => {
        return data.data;
      })
      .catch(err => {
        throw Error(`${options.url}请求出错`)
      })
  }
}

export default Server;
