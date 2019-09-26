export default {
  getUser(params) {
    return $axios.get('url_to_get', { params });
  }
};
