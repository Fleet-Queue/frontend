// assets
import {IconAd2,IconBuildingSkyscraper,IconBrandBooking,IconSortDescending2,IconSteeringWheel,IconNote,IconClockEdit,IconLocation,IconCash,IconNavigationOff,IconDiscount2,IconTruckDelivery,IconTruckLoading,IconUsers } from '@tabler/icons';

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
  IconUsers,
  IconSortDescending2
};



// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //


export default function Pages (){
  const role = localStorage.getItem('role');
  if (!role) {
    window.location.href = '/login';
    return null;
  }
  console.log(role)
  const isBoth = role === 'both';
  const isAdmin = role === 'admin';
  const isTransporter = role === 'transporter';
  const isForwarder = role === 'forwarder';
  console.log('is both', isBoth, isTransporter, isForwarder)

  const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
     
      //fowarder routes
      {
        id: 'doupload',
        title: 'DO Details',
        type: 'item',
        url: '/doUpload',
        icon: icons.IconNote,
      },
      {
        id: 'opendoupload',
        title: 'Open DOs',
        type: 'item',
        url: '/openDoUpload',
        icon: icons.IconNote,
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
        title: 'Allocated Booking',
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
      },
      {
        id: 'truckQueue',
        title: 'Truck Queue',
        type: 'item',
        url: '/truckQueue',
        icon: icons.IconSortDescending2,
      },
      {
        id: 'manageTrucks',
        title: 'Manage Trucks',
        type: 'item',
        url: '/manageTrucks',
        icon: icons.IconTruckDelivery,
      },
      {
        id: 'location',
        title: 'Locations',
        type: 'item',
        url: '/location',
        icon: icons.IconLocation,
      },
       {
        id: 'manageUsers',
        title: 'Manage Users',
        type: 'item',
        url: '/manageUsers',
        icon: icons.IconUsers,
      },
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
      {
        id: 'ongoingTrucks',
        title: 'OnGoing Trucks',
        type: 'item',
        url: '/ongoingTrucks',
        icon: icons.IconClockEdit,
      },
      
      {
        id: 'parties',
        title: 'Parties',
        type: 'item',
        url: '/parties',
        icon: icons.IconNote,
      },
    ]
  };
  



  pages.children = pages.children.filter((item) => {
    const transporterItems = ['truckQueue','manageTrucks', 'allocatedTrucks', 'ongoingTrucks', 'manageDriver', 'truckBooking'];
    const forwarderItems = ['truckQueue','parties', 'doupload', 'opendoupload', 'location', 'rateMap', 'allocatedDo', 'canceledDo'];
  
    if (isBoth) {
      // Show only items common to both roles
      return transporterItems.includes(item.id) || forwarderItems.includes(item.id);
    }
  
    if (isAdmin) {
      return ['truckQueue','manageCompany', 'manageDriver', 'manageTrucks', 'doupload','location',  'doBooking', 'allocatedDo', 'canceledDo','manageUsers'].includes(item.id);
    }
  
    if (isTransporter) {
      return transporterItems.includes(item.id);
    }
  
    if (isForwarder) {
      return forwarderItems.includes(item.id);
    }
  
    return false;
  });
  
  return pages;
  
}
  
  
  


// export default pages;
