import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ManageTrucks = Loadable(lazy(() => import('views/pages/manageTrucks')));
const ManageCompany = Loadable(lazy(() => import('views/pages/manageCompany')));
const ManageDrivers = Loadable(lazy(() => import('views/pages/manageDrivers')));
const AllocatedTrucks = Loadable(lazy(() => import('views/pages/allocatedTrucks')));
const OnGoingTrucks = Loadable(lazy(() => import('views/pages/onGoingTrucks')));
const TruckBooking = Loadable(lazy(() => import('views/pages/truckBooking')));
const DoUpload = Loadable(lazy(() => import('views/pages/doUpload')));
const OpenDoUpload = Loadable(lazy(() => import('views/pages/openDoUpload')));
const Parties = Loadable(lazy(() => import('views/pages/parties')));
const Locations = Loadable(lazy(() => import('views/pages/location')));
const DoBooking = Loadable(lazy(() => import('views/pages/openDoBooking')));
const AllocatedDOBooking = Loadable(lazy(() => import('views/pages/doBooking')));
const CancelledDOBooking = Loadable(lazy(() => import('views/pages/cancelledDoBooking')));
const ManageUsers = Loadable(lazy(() => import('views/pages/manageUsers')));
const TruckQueue = Loadable(lazy(() => import('views/pages/truckQueue')));
// ==============================|| MAIN ROUTING ||============================== //



const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Navigate to="dashboard" />
    },
      {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    //transporter routes
    

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
      path: 'manageTrucks',
      element: <ManageTrucks />
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
    {
    path: 'truckQueue',
    element: <TruckQueue />
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
      path: 'ongoingTrucks',
      element: <OnGoingTrucks />
    },
    {
      path: 'truckBooking',
      element: <TruckBooking />
    },
    {
      path: 'manageUsers',
      element: <ManageUsers />
    },
    
    // 404 route
    {
      path: '*',
      element: <DashboardDefault />
    }
  ]
};

export default MainRoutes;
