import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    <div>
        <Page02>
          <section className='page02'>
            <div className="page02-wrapper">
            <i class="fa-solid fa-arrow-left go-back"></i>

            <form className='search'>
              <input type="search" placeholder='Search conversations'/>
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>

            <div className="call">
              <h2>Justin Wan</h2>
              <div className="icon">
                <a href="tel:+998919602240">
                  <i class="fa-solid fa-phone"></i>
                </a>
              <i class="fa-solid fa-video"></i>
              </div>
            </div>

            <div className="page02-message">
             <div className="message-main-wrapper">
              <div className="profile"></div>
              <div className="messages">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie.</p>
              </div>
              <div className="message-hour">16:45</div>
             </div>

             <div className="message-main-wrapper message-main-wrapper2">
              <div className="messages">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie.</p>
              </div>
             </div>

             <div className="message-main-wrapper message-main-wrapper3">
              <div className="messages">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie.</p>
              </div>
             </div>

             <div className="message-main-wrapper message-main-wrapper4">
              <div className="profile"></div>
              <div className="messages">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie.</p>
              </div>
             </div>

             

              <form className='sent'>
              <input type="text"  placeholder='...'/>
              <i class="fa-brands fa-airbnb sent-icon"></i>
            </form>
            </div>

           
            </div>
          </section>
        </Page02>
    </div>
  )
}

const Page02 = styled.div`

  .page02{
    border:4px solid #000;
    width:100%;
    height:100vh;
    border-radius:20px;
    .page02-wrapper{
      padding-top: 64px;
      
      .go-back{
        width:24px;
        height:24px;
        cursor:pointer;
        margin-bottom:15px;
        padding-left:24px;
      }

      .search{
        position:relative;
        margin-bottom:15px;
        padding-left:24px;
        padding-right:24px;
        input{
          width:342px;
          height:50px;
          border-radius:15px;
          border:none;
          background-color:#c4c4c4;
          padding-left:41px;
          font-size:14px;
          line-height:18px;
          color:#000;
          padding-right:15px;
        }

        i{
          position:absolute;
          left:39px;
          top:18px;
          cursor:pointer;
        }
      }

      .call{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding-left:24px;
        padding-right:24px;
        margin-bottom:53px;
        
        h2{
          font-size:28px;
          line-height:36px;
          color:#000;
        }

        .icon{
          display:flex;
          align-items:center;
          gap:17px;

          i{
            width:45px;
            height:45px;
            border-radius:50%;
            background-color:#c4c4c4;
            display:flex;
            justify-content:center;
            align-items:center;
            cursor:pointer;
          }
        }
      }

      .page02-message{
        display:flex;
        gap:23px;
        flex-direction:column;
        height:auto;
        background-color:#f4f4f4;
        border-radius:40px;
        padding-left:24px;
        padding-right:24px;
        padding-top:24px;

        .message-main-wrapper{

          display:flex;
          align-items:center;
          justify-content:space-between;
          .profile{
            width:40px;
            height:40px;
            border-radius:8px;
            background-color:#c4c4c4;
          }

          .messages{
            padding:16px 22px 10px 22px;
            color:red;
            width:220px;
            background-color:#d0d0d0;
            border-top-left-radius:50px;
            border-top-right-radius:50px;
            border-bottom-right-radius:50px;
            font-size:14px;
            line-height:18px;
            color:#525252;
          }

          .message-hour{
            font-size:12px;
            line-height:16px;
            color:#a8a8a8;
          }
        }

        .message-main-wrapper2{
          justify-content:center;
        }

        .message-main-wrapper3{
          justify-content:end;
        }

        .sent{
          position:relative;
          input{
            width:342px;
            height:50px;
            border-radius:50px;
            background-color:#c4c4c4;
            border:none;
            padding-left:15px;
            font-size:14px;
            line-height:18px;
            color:#000;
          }

          i{
            position:absolute;
            top:4px;
            right:-12px;
            rotate:90deg;
            width:45px;
            height:45px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            background-color:#fff;
            cursor:pointer;
            font-weight:bold;
          }
        }

        
      }


    }
  }
`

export default index
