// assets
import {IconAd2,IconBuildingSkyscraper,IconBrandBooking,IconSteeringWheel,IconNote,IconClockEdit,IconLocation,IconCash,IconNavigationOff,IconDiscount2,IconTruckDelivery,IconTruckLoading,IconUsers } from '@tabler/icons';

// constant
const icons = {
  IconNote,
  IconAd2,
  IconDiscount2,
  IconTruckDelivery,
  IconClockEdit,
  IconLocation,
  IconCash,
  IconTruckLoading,
  IconNavigationOff,
  IconBrandBooking,
  IconBuildingSkyscraper,
  IconSteeringWheel,
  IconUsers
};


 const role = localStorage.getItem('role');
console.log(role)
const isBoth = role === 'both';
const isAdmin = role === 'admin';
const isTransporter = role === 'transporter';
const isForwarder = role === 'forwarder';
console.log('is both', isBoth, isTransporter, isForwarder)
// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    //admin routes
    {
      id: 'manageCompany',
      title: 'Manage Company',
      type: 'item',
      url: '/manageCompany',
      icon: icons.IconBuildingSkyscraper,
    },
    {
      id: 'manageDriver',
      title: 'Manage Drivers',
      type: 'item',
      url: '/manageDrivers',
      icon: icons.IconSteeringWheel,
    },
    {
      id: 'manageTrucks',
      title: 'Manage Trucks',
      type: 'item',
      url: '/manageTrucks',
      icon: icons.IconTruckDelivery,
    },
    {
      id: 'parties',
      title: 'Parties',
      type: 'item',
      url: '/parties',
      icon: icons.IconNote,
    },
    {
      id: 'truckBooking',
      title: 'Manage Truck Booking',
      type: 'item',
      url: '/truckBooking',
      icon: icons.IconBrandBooking,
    },
    {
      id: 'allocatedTrucks',
      title: 'Allocated Trucks',
      type: 'item',
      url: '/allocatedTrucks',
      icon: icons.IconClockEdit,
    },
    //fowarder routes
    {
      id: 'doupload',
      title: 'DoUploads',
      type: 'item',
      url: '/doUpload',
      icon: icons.IconNote,
    },
    {
      id: 'opendoupload',
      title: 'Open Dos',
      type: 'item',
      url: '/openDoUpload',
      icon: icons.IconNote,
    },
    {
      id: 'location',
      title: 'Locations',
      type: 'item',
      url: '/location',
      icon: icons.IconLocation,
    },
    {
      id: 'doBooking',
      title: 'Open DO Booking',
      type: 'item',
      url: '/doBooking',
      icon: icons.IconTruckDelivery,
    },
    {
      id: 'allocatedDo',
      title: 'allocated Booking',
      type: 'item',
      url: '/allocatedBooking',
      icon: icons.IconTruckLoading,
    },
    {
      id: 'canceledDo',
      title: 'cancelled Booking',
      type: 'item',
      url: '/cancelledBooking',
      icon: icons.IconNavigationOff,
    }, {
      id: 'manageUsers',
      title: 'Manage Users',
      type: 'item',
      url: '/manageUsers',
      icon: icons.IconUsers,
    }
  ]
};





// Filter menu items based on role
pages.children = pages.children.filter((item) => {
  if (isBoth) {
    return true; // Render all items for 'Both' role
  }
  if (isAdmin){
    return  item.id === "manageCompany" || item.id === 'manageDriver' ||  item.id === 'manageTrucks'   ||  item.id === 'doupload' || item.id === 'parties' || item.id === 'doBooking' || item.id === 'allocatedDo' || item.id === 'canceledDo' || item.id === 'manageUsers';
  }
  if (isTransporter) {
    return item.id === 'manageTrucks' || item.id === "allocatedTrucks" || item.id === "manageDriver" || item.id === "truckBooking" // Render for 'Transporter' role
  }
  if (isForwarder) {
    return item.id === 'parties' ||  item.id === 'doupload' ||  item.id === 'opendoupload'  || item.id === 'location' || item.id === 'rateMap' || item.id === 'allocatedDo'  || item.id === 'canceledDo'; 
  }
  return false; // Default case: do not render any item
});

export default pages;
