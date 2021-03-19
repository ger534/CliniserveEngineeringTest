import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import {
  Link
} from 'react-router-dom';

//array for menu
let menu = [
  {
    icon: <DashboardIcon />,
    text: 'Dashboard',
    route: '/'
  },
  {
    icon: <InfoIcon />,
    text: 'about',
    route: '/about'
  }
]


export const mainListItems = (
  <div>
    {menu.map((item) =>
      <Link to={item.route} style={{ textDecoration: 'none', color: 'black'}} key={item.text}>
        <ListItem button>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      </Link>
    )}
  </div>
);