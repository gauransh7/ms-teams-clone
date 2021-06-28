// import axios from 'axios';
// import Cookies from 'js-cookie';

// import store from '../store';
// store.subscribe(listener)

// let token = '';

// // function select(state) {
// //   return state.auth.token
// // }

// function listener() {
//   // let tokendata = select(store.getState())
//   // console.log("listen")
//   // console.log(tokendata)
//   token = Cookies.get('token');
// }

// const apiClient = axios.create({
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
//     withCredentials: true,
// });


// apiClient.interceptors.request.use(function (config) {
//   config.headers["Authorization"] = 'Token ' + Cookies.get("token");
//   return config;
// });

// export default apiClient;


import axios from 'axios';
import { getCookie } from './helperFunctions';

const apiClient = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

apiClient.interceptors.request.use(function (config) {
  config.headers['X-CSRFToken'] = getCookie('teams_csrftoken');
  return config;
});

export default apiClient;

// import axios from 'axios';
// import { getCookie } from './helperFunctions';

// const apiClient = axios.create({
//   baseURL: 'api/',
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     'Cache-Control': 'no-cache',
//   },
// });

// apiClient.interceptors.request.use(function (config) {
//   config.headers['X-CSRFToken'] = getCookie('wellness_csrftoken');
//   return config;
// });

// export default apiClient;