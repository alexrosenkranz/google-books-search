import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';

const SideNav = (props) => {
  const {classes} = props;
  return (
    <div>
      <List>
        {['Search', 'Saved'].map((text, index) => (
          <Link key={text} to={`/${text.toLowerCase()}`}>
            <ListItem button>
              <ListItemIcon>{index % 2 === 0
                ? <SearchIcon />
                : <BookIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  )
}

export default SideNav;