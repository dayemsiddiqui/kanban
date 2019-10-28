import React from 'react';

const NavBar: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="home-navbar home-navbar-expand-lg home-navbar-dark home-navbar-custom fixed-top">
        {/* Text Logo - Use this if you don't have a graphic logo */}
        <a className="home-navbar-brand logo-text page-scroll" href="#">
          Dead Simple Kanban
        </a>
      </nav>
    </>
  );
};

export default NavBar;
