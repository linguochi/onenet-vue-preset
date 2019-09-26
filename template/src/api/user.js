export default {
  getUser(payload) {
    let { url, params } = payload;
    return $axios.get(url, { params });
  }
};
