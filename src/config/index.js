const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://fepemoflix.herokuapp.com';

export default {
  URL
};