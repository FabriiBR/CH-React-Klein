import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartWidget } from '../cartWidget/cartWidget'
import { Widget } from '../widget/widget'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <div className="container-fluid">
        <Link to = '/' className="navbar-brand"><Widget/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to='/category/frontend' className="nav-link link-light scale">Frontend</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/backend' className="nav-link link-light scale">Backend</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/uiux' className="nav-link link-light scale">UX/UI</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/devops' className="nav-link link-light scale">DevOps</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/marketing' className="nav-link link-light scale">Marketing</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/project' className="nav-link link-light scale">Proyectos</Link>
            </li>
            <li className="nav-item">
              <NavLink to='/cart' activeClassName="activeLink" className="nav-link">
                <CartWidget/>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}