import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="logo-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="my-image"
      />
      <h1>Wave</h1>
    </div>
    <ul className="list-order">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
      <li className="list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
