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



// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //


export default function Pages (){
  const role = localStorage.getItem('role');
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
        id: 'manageTrucks',
        title: 'Manage Trucks',
        type: 'item',
        url: '/manageTrucks',
        icon: icons.IconTruckDelivery,
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
    if (isBoth) {
      return true; 
    }
    if (isAdmin){
      return  item.id === "manageCompany" || item.id === 'manageDriver' ||  item.id === 'manageTrucks'   ||  item.id === 'doupload' || item.id === 'parties' || item.id === 'doBooking' || item.id === 'allocatedDo' || item.id === 'canceledDo' /*|| item.id === 'manageUsers'*/;
    }
    if (isTransporter) {
      return item.id === 'manageTrucks' || item.id === "allocatedTrucks" || item.id === "ongoingTrucks"  || item.id === "manageDriver" || item.id === "truckBooking" // Render for 'Transporter' role
    }
    if (isForwarder) {
      return item.id === 'parties' ||  item.id === 'doupload' ||  item.id === 'opendoupload'  || item.id === 'location' || item.id === 'rateMap' || item.id === 'allocatedDo'  || item.id === 'canceledDo'; 
    }
    return false; 
  });
  

  
  return pages
}
  
  
  


// export default pages;
