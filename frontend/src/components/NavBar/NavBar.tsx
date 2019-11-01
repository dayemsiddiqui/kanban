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

interface NavBarProps {
  onAddTaskClick: () => void;
  onLogoutClick: () => void;
  user: firebase.User | null;
}

const NavBar: React.FC<NavBarProps> = ({
  onAddTaskClick,
  onLogoutClick,
  user
}) => {
  let greeting = 'Hi There';
  if (user) {
    greeting = 'Welcome, ' + user.displayName;
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

export default NavBar;
