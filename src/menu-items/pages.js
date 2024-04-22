// assets
import {IconAd2,IconNote,IconClockEdit,IconLocation,IconCash,IconNavigationOff,IconDiscount2,IconTruckDelivery,IconTruckLoading } from '@tabler/icons';

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
  IconNavigationOff
};


 const role = localStorage.getItem('role');
console.log(role)
const isBoth = role === 'both';
const isTransporter = role === 'transporter';
const isForwarder = role === 'forwarder';
console.log('is both', isBoth, isTransporter, isForwarder)
// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    //transporter routes
    {
      id: 'manageTrucks',
      title: 'Manage Trucks',
      type: 'item',
      url: '/manageTrucks',
      icon: icons.IconTruckDelivery,
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
      id: 'parties',
      title: 'Parties',
      type: 'item',
      url: '/parties',
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
      title: 'All Do Booking',
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
      title: 'canceled Booking',
      type: 'item',
      url: '/canceledBooking',
      icon: icons.IconNavigationOff,
    }
  ]
};





// Filter menu items based on role
pages.children = pages.children.filter((item) => {
  if (isBoth) {
    return true; // Render all items for 'Both' role
  }
  if (isTransporter) {
    return item.id === 'manageTrucks' || item.id === "allocatedTrucks"; // Render for 'Transporter' role
  }
  if (isForwarder) {
    return item.id === 'parties' || item.id === 'location' || item.id === 'rateMap' || item.id === 'doBooking' || item.id === 'allocatedDo'  || item.id === 'canceledDo'; // Render 'Log' and 'Offers' for 'Forwarder' role
  }
  return false; // Default case: do not render any item
});

export default pages;
