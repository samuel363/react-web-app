import Login from './views/login';
import Home from './views/home';

const Routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
];
export default Routes;
