// import axios from 'axios';
// const instance = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   timeout: 15000,
//   // headers: {
//   //   Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')?.token)}`,
//   // },
// });
// instance.interceptors.request.use(config => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   if (user?.token) {
//     config.headers.Authorization = `Bearer ${user.token}`;
//   }
//   return config;
// });
// export default instance;
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
});

export default instance;
