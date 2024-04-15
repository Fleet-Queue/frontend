// assets
import {IconAd2,IconNote,IconDiscount2 } from '@tabler/icons';

// constant
const icons = {
  IconNote,
  IconAd2,
  IconDiscount2
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
    {
      id: 'manageTrucks',
      title: 'Manage Trucks',
      type: 'item',
      url: '/manageTrucks',
      icon: icons.IconAd2,
    },
    {
      id: 'log',
      title: 'Log',
      type: 'item',
      url: '/logs',
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
    return item.id === 'manageTrucks'; // Render only 'Advertisements' for 'Transporter' role
  }
  if (isForwarder) {
    return item.id === 'log' || item.id === 'offer'; // Render 'Log' and 'Offers' for 'Forwarder' role
  }
  return false; // Default case: do not render any item
});

export default pages;
