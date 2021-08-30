
import { Routes } from './Routers';
import { Route } from './definitions';
import Home from './screens/home/Home';

const routers: Route[] = [
  {
    name: 'Home',
    path: Routes.Dashboard,
    component: Home,
    breadcrumb: false,
  },
];

export default routers;
