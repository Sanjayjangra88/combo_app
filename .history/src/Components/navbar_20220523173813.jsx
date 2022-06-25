import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    // let {qty,count}=this.props;
    let {data}=this.props;
    return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className='navbar-brand'href="#">Library</a>
    <div className="" id="navbarSupportedContent">
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Total Message
            <span className="badge badge-pill badge-primary">
            {data.length} 
            </span>
          </a>
        </li>
        
        
      </ul>
    </div>

  </nav>
 

    )
  }
}

export default Navbar
