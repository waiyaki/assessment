import Axios from 'axios';

export function get(url) {
  return Axios.get(url)
    .then(({ data }) => data)
}

export default {
  get
}
