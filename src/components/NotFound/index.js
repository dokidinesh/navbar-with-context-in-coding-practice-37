// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-not-found">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="dark-heading">Lost Your Way?</h1>
              <p className="dark-description">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          ) : (
            <div className="light-not-found">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="light-heading">Lost Your Way?</h1>
              <p className="light-description">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
