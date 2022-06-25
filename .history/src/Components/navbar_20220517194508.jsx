import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    let {qty,count}=this.props;
    return (
  // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  //   <a className='navbar-brand'href="#">MySytem</a>
  //   <div className="" id="navbarSupportedContent">
  //     <ul className='navbar-nav mr-auto'>
  //       <li className='nav-item'>
  //         <a className='nav-link' href='#'>
  //           Product
  //           <span className="badge badge-pill badge-primary">
  //           {count}</span>
  //         </a>
  //       </li>
  //       <li className='nav-item'>
  //         <a className='nav-link' href='#'>
  //           Quantity
  //           <span className="badge badge-pill badge-primary ">
  //           {qty}</span>
  //         </a>
  //       </li>
        
  //     </ul>
  //   </div>

  // </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}

export default Navbar
