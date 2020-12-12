import Home from '@/views/home'
import Mine from '@/views/mine'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/mine',
    component: Mine
  }
];

export default routes;
