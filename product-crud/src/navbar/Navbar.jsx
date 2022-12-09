import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="/" className='navbar-brand'>Product-CRUD</Link>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
          <li className='nav-list'><Link to="product" className='nav-link'>Product-list</Link></li>
          <li className='nav-list'><Link to="create" className='nav-link'>Create-product</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar