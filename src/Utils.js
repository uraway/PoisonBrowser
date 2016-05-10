'use strict';

export default class Utils {
  static sanitizeURL(url) {
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = 'http://' + url;
    }
    return url.toLowerCase();
  }
}
