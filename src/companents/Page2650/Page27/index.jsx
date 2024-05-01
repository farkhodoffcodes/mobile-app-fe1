import React from 'react'

const Page27 = () => {
  return (
    <div className="container">
    <div className='wrapper-page-26'> 
        <header className='header-page-26'>
            <h2>Workouts</h2>
            <div className="header-box-26"></div>
        </header>
         
        <main>
            <div className="page-27-select">
            <label for="cars"></label>
                <select id="cars">
                <option value="volvo">Workout name #1</option>
                <option value="saab">Workout name #2</option>
                <option value="vw">Workout name #3</option>
                </select>
            </div>
            <div className="page-27-img">
                <img src="../assets/image/img page 27.png" alt="" />
                <img src="../assets/image/img page 27.png" alt="" />
            </div>
        </main>
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

export default Page27