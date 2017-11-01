const utils = {
  formatData(obj) {
    if (typeof obj !== 'object' || obj === null) {
      console.log('参数错误');
      return;
    }

    let res = '';

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'number') {
          res += `${key}=${obj[key]}&&`;
        } else {
          res += `${key}=${obj[key]}&&`;
        }
      }
    }

    if (res.length > 0) {
      return res.substring(0, res.length - 2);
    } else {
      return '';
    }
  },

  sess: {
    get(key) {
      try {
        return window.sessionStorage.getItem(key) || '';
      } catch(e) {
        throw Error('sessionStorage不被浏览器支持', e);
      }
    },
    set(key, value) {
      try {
        window.sessionStorage.setItem(key, value);
      } catch(e) {
        throw Error('sessionStorage不被浏览器支持', e);
      }
    }
  }
}

export default utils;
