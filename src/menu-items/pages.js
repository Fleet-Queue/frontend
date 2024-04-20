// assets
import {IconAd2,IconNote,IconClockEdit,IconDiscount2,IconTruckDelivery } from '@tabler/icons';

// constant
const icons = {
  IconNote,
  IconAd2,
  IconDiscount2,
  IconTruckDelivery,
  IconClockEdit
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
      id: 'offer',
      title: 'Offers',
      type: 'item',
      url: '/offers',
      icon: icons.IconDiscount2,
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
    return item.id === 'parties' || item.id === 'offer'; // Render 'Log' and 'Offers' for 'Forwarder' role
  }
  return false; // Default case: do not render any item
});

export default pages;
