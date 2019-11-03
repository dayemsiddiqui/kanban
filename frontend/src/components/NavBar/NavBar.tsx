import React from 'react';
import './NavBar.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink
} from 'reactstrap';
import { observer } from 'mobx-react-lite';

interface NavBarProps {
  onAddTaskClick: () => void;
  onLogoutClick: () => void;
  displayName: string;
}

const NavBar: React.FC<NavBarProps> = ({
  onAddTaskClick,
  onLogoutClick,
  displayName
}) => {
  let greeting = 'Hi There';
  if (displayName !== '') {
    greeting = 'Welcome, ' + displayName;
  }
  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand className="navbar-logo">Dead Simple Kanban</NavbarBrand>
      <Nav className="ml-auto navbar-logo" navbar>
        <NavItem onClick={onAddTaskClick}>
          <NavLink>Add Task</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {greeting}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={onLogoutClick}>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default observer(NavBar);
