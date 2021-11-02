// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
              <h1 className="dark-home-heading">Home</h1>
            </div>
          ) : (
            <div className="light-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
              <h1 className="light-home-heading">Home</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
