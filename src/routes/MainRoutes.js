import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ManageTrucks = Loadable(lazy(() => import('views/pages/manageTrucks')));
const ManageCompany = Loadable(lazy(() => import('views/pages/manageCompany')));
const ManageDrivers = Loadable(lazy(() => import('views/pages/manageDrivers')));
const AllocatedTrucks = Loadable(lazy(() => import('views/pages/allocatedTrucks')));
const TruckBooking = Loadable(lazy(() => import('views/pages/truckBooking')));
const DoUpload = Loadable(lazy(() => import('views/pages/doUpload')));
const OpenDoUpload = Loadable(lazy(() => import('views/pages/openDoUpload')));
const Parties = Loadable(lazy(() => import('views/pages/parties')));
const Locations = Loadable(lazy(() => import('views/pages/location')));
const DoBooking = Loadable(lazy(() => import('views/pages/openDoBooking')));
const AllocatedDOBooking = Loadable(lazy(() => import('views/pages/doBooking')));
const CancelledDOBooking = Loadable(lazy(() => import('views/pages/cancelledDoBooking')));

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
      path: 'manageCompany',
      element: <ManageCompany />
    },
    {
      path: 'manageDrivers',
      element: <ManageDrivers />
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
      path: 'doUpload',
      element: <DoUpload />
    },
    {
      path: 'openDoUpload',
      element: <OpenDoUpload />
    },
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
      path: 'allocatedBooking',
      element: <AllocatedDOBooking />
    }, 
    {
      path: 'cancelledBooking',
      element: <CancelledDOBooking />
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
