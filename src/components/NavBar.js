import React from 'react'
import img from '../Images/Img.jpeg'
import '../Styles/Image.css'
import '../Styles/Nav.css'
import '../Styles/Name.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg colornav">
  <div className="container-fluid">
    <span className="navbar-brand"><img src={img} alt="" className ="image--cover" /></span>
    <Link to='/'><button className="navbar-toggler" type="button">
      <span className="fa-solid fa-house fa-2x"></span>
    </button>
    </Link>
    <div className="container name d-flex justify-content-center">
        Sakshat Shetty
    </div>
    <Link to='/'>
    <div className="home">
        <button className='home1'><i className="fa-solid fa-house fa-2x" ></i></button>
    </div>
    </Link>
  </div>
</nav>

    </>
  )
}

export default NavBar
