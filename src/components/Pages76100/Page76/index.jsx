import React from 'react'
import '../Page76/page76.css'

const index = () => {
  return (
    <div>
      <div className="app-container">
        <div className="header-menu">
          <div className="left-header-menu">
            <img src="./assets/image/menu.svg" alt="" className='menu-bar' />
            <h1>Podcast</h1>
          </div>
          <div className="right-header-menu">
            <img src="./assets/image/notifications_none.svg" alt="" />
            <img src="./assets/image/search.svg" alt="" />
          </div>
        </div>
        <div className="main-of-76">
          <div className="main-76 hidden-76">
            <div className="first-main-76">
              <img src="./assets/image/facebook.svg" alt="" />
              <h2>Facebook</h2>
            </div>
            <a href="#">Connected</a>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <img src="./assets/image/google.svg" alt="" />
              <h2>Google</h2>
            </div>
            <a href="#">Connected</a>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <img src="./assets/image/twitter.svg" alt="" />
              <h2>Twitter</h2>
            </div>
            <a href="#">Connect</a>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Dark mode</h2>
            </div>
            <a href="#">Dark mode</a>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Toggle beta version</h2>
            </div>
            <img src="./assets/image/Vector.svg" alt="" />
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Disable image loading</h2>
            </div>
            <input type="checkbox" className='cub' />
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Limit background data usage to wifi only</h2>
            </div>
            <input type="checkbox" className='cub' />
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Push notification</h2>
            </div>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Account</h2>
            </div>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Email notification</h2>
            </div>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Join our community</h2>
            </div>
          </div>
          <div className="main-76">
            <div className="first-main-76">
              <h2>Sign out</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index