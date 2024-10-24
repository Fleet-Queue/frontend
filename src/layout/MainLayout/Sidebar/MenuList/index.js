// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import { useEffect } from 'react';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {

  useEffect(()=>{

  },[])
  console.log(menuItem)
  console.log("menuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuIUtem")
  const navItems = menuItem.items.map((item) => {
    console.log(item)
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
