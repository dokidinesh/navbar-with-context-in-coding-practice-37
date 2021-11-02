// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="dark-navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
          />
          <ul className="menu">
            <Link to="/">
              <li className="dark-list-item">Home</li>
            </Link>
            <Link to="/about">
              <li className="dark-list-item">About</li>
            </Link>
          </ul>
          <button
            className="button"
            testid="theme"
            type="button"
            onClick={onClickThemeButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      ) : (
        <div className="light-navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
          />
          <ul className="menu">
            <Link to="/">
              <li className="light-list-item">Home</li>
            </Link>
            <Link to="/about">
              <li className="light-list-item">About</li>
            </Link>
          </ul>
          <button
            className="button"
            testid="theme"
            type="button"
            onClick={onClickThemeButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
