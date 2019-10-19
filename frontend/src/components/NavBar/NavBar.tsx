import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="uk-navbar-container navbar" uk-navbar>
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo navbar-logo" href="#">
          Dead Simple Kanban
        </a>

        <ul className="uk-navbar-nav color-white">
          <li>
            <a href="#">
              <span
                className="uk-icon uk-margin-small-right"
                uk-icon="icon: star"
              ></span>
              Add Task
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
