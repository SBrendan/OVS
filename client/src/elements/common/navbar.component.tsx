import * as React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

import './navbar.component.scss';

// NavBar Component
export class NavBar extends React.Component<any, any> {

  public render() {
    return (
      <Menu inverted={true} className='gb-navbar'>
        <Menu.Item as={Link} to='/' color='blue' active={true} header={true}><Icon name='cogs' /> On Va Sortir</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} exact strict to='/signup'>Sign Up</Menu.Item>
          <Menu.Item as={NavLink} exact strict to='/help'>Help</Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
