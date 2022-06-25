import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    // let {qty,count}=this.props;
    let {issue}=this.props;
    return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className='navbar-brand'href="#">MySytem</a>
    <div className="" id="navbarSupportedContent">
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Product
            <span className="badge badge-pill badge-primary">
            {/* {count}  */}
            </span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Quantity
            <span className="badge badge-pill badge-primary "> 
            {/* {qty} */}
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
