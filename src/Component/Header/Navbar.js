import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {

     return (
          
               <nav>
    <div className="nav-wrapper #0d47a1 blue darken-4">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/todoList">TodoList</Link></li>
        <li><Link to="/UserListApi">UserList</Link></li>
      </ul>
    </div>
  </nav>
          
     )
}
