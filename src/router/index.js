import Home from '@/views/home'
import Mine from '@/views/mine'
import SheetDetail from '@/views/sheet-detail'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/sheet-detail',
    component: SheetDetail
  }
];

export default routes;
