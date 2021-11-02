// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-about">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
              <h1 className="dark-about-heading">About</h1>
            </div>
          ) : (
            <div className="light-about">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
              <h1 className="light-about-heading">About</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
