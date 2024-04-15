import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ManageTrucks = Loadable(lazy(() => import('views/pages/manageTrucks')));
const Logs = Loadable(lazy(() => import('views/pages/logs')));
const Offers = Loadable(lazy(() => import('views/pages/offers')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'manageTrucks',
      element: <ManageTrucks />
    },
    {
      path: 'logs',
      element: <Logs />
    },
    {
      path: 'offers',
      element: <Offers />
    }
  ]
};

export default MainRoutes;
