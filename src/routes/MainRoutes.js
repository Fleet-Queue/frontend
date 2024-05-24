import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ManageTrucks = Loadable(lazy(() => import('views/pages/manageTrucks')));
const AllocatedTrucks = Loadable(lazy(() => import('views/pages/allocatedTrucks')));
const TruckBooking = Loadable(lazy(() => import('views/pages/truckBooking')));
const Parties = Loadable(lazy(() => import('views/pages/parties')));
const Locations = Loadable(lazy(() => import('views/pages/location')));
const DoBooking = Loadable(lazy(() => import('views/pages/doBooking')));
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
    {
      path: 'truckBooking',
      element: <TruckBooking />
    },

    //forwarder routes
    {
      path: 'parties',
      element: <Parties />
    },
    {
      path: 'location',
      element: <Locations />
    },
    {
      path: 'doBooking',
      element: <DoBooking />
    },
    {
      path: 'doBooking/:partyId',
      element: <DoBooking />
    },
    // 404 route
    {
      path: '*',
      element: <DoBooking />
    }
  ]
};

export default MainRoutes;
