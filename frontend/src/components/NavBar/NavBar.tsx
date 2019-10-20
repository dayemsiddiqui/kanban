import React from 'react';
import './NavBar.css';

interface NavBarProps {
  onAddTaskClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onAddTaskClick }) => {
  return (
    <nav className="uk-navbar-container navbar">
      <div className="uk-navbar-left">
        <span className="uk-navbar-item uk-logo navbar-logo">
          Dead Simple Kanban
        </span>

        <ul className="uk-navbar-nav color-white">
          <li>
            <span onClick={onAddTaskClick}>Add Task</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
