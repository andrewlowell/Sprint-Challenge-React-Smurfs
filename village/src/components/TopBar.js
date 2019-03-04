import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topBar">
      <NavLink exact to="/" activeClassName="selected">Home</NavLink>
      <NavLink to="/smurf-form" activeClassName="selected">Add Smurf</NavLink>
    </div>
  );
}
 
export default TopBar;