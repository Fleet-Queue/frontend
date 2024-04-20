import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ManageTrucks = Loadable(lazy(() => import('views/pages/manageTrucks')));
const AllocatedTrucks = Loadable(lazy(() => import('views/pages/allocatedTrucks')));
const Parties = Loadable(lazy(() => import('views/pages/parties')));
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
    //transporter routes
    {
      path: 'manageTrucks',
      element: <ManageTrucks />
    },
    {
      path: 'allocatedTrucks',
      element: <AllocatedTrucks />
    },

    //forwarder routes
    {
      path: 'parties',
      element: <Parties />
    },
    {
      path: 'offers',
      element: <Offers />
    }
  ]
};

export default MainRoutes;
