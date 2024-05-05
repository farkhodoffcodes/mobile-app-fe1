import React from 'react'

const Page28 = () => {
  return (
    <div className="container">
    <div className='wrapper-page-26'> 
        <header className='header-page-26'>
            <h2>Daily activity</h2>
            <div className="header-box-26"></div>
        </header>
        <main>
          <section className='daily-page-28'>
              <div className="daily-box-page-28">
                <p>Mon</p>
                <span>20</span>
              </div>
              <div className="daily-boxs-page-28">
                <p>Tue</p>
                <span>21</span>
              </div>
              <div className="daily-boxs-page-28">
                <p>Wed</p>
                <span>22</span>
              </div>
              <div className="daily-boxs-page-28">
                <p>Thu</p>
                <span>23</span>
              </div>
              <div className="daily-boxs-page-28">
                <p>Fri</p>
                <span>24</span>
              </div>
          </section>
          <section className="jogging-page-28">
            <h2>Jogging</h2>
            <div className="jogging-box-page-28">
              <ul>
              <li>
                  <span>7.50</span>
                  <p>Km</p>
                </li>
                <li>
                  <span>1.2</span>
                  <p>Hours</p>
                </li>
                <li>
                  <span>5.20</span>
                  <p>Speed</p>
                </li>
              
              </ul>
            </div>
          </section>
          <section className="health-page-28">
            <h2>Health status</h2>
          </section>
          <section className='statistic-page-28'>
            <div className="sts-box-page-28">
              <br />
              <br />
              <br />
              <span>100
                bpm
              </span>
            </div>
            <div className="sts-wrapper-page-28">
              <div className="sts-inner-box-28">
                <br />
                <span>12000
                </span>
                <br />
                <p>steps</p>
              </div>
              <br />
              <div className="sts-inner-box-28">
              <br />
                <span>520
                </span>
                <br />
                <p>colories</p>
              </div>
            </div>
          </section>
        </main>
        <br />
        <hr className='hr' />  
        <footer className='footer-page-26'>
            <img className='fimg' src="../assets/image/control_point_duplicate.svg" alt="" />
            <img src="../assets/image/cast_connected.svg" alt="" />
            <img src="../assets/image/horizontal_split.svg" alt="" />
            <img src="../assets/image/perm_contact_calendar.svg" alt="" />
        </footer>
    </div>
</div>
  )
}

export default Page28