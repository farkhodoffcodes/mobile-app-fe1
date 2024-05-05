import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    
      <Page02>
        <div className='container'>
        <section className='contact'>       
          <div className="contact-top">
            <div className='contact-hero'>
              <img className='close--img' src="./assets/image/close.svg" alt="rasm" /> 
              <h3 className='share--post'>Share post</h3>
            </div>
             <p className='post'>Post</p>
          </div>
           <div className='anyone'>
            <img src="./assets/image/Ellipse 130 (1).svg" alt="rasmlar" />
            <div className='oscar--hero'>
            <p className='oscar'>Oscar Sun</p>
            <button className='post-btn'>Anyone</button>
            <img className='Internit' src="./assets/image/Globe.svg" alt="logo" />
            <img className='arrow-drop' src="./assets/image/arrow_drop_down.svg" alt="logo" />
            </div>
              
              
          </div>
          <p className='paragraph'>What do you want to talk about?</p> 
        </section>

        <div className='contact-top--hero'>
        <hr className='Line1'></hr>
            <ol className='frame--ol'>
                <li className='frame--lest'>
                    <img src="./assets/image/photo_library.svg" alt="rasm" />
                    <a className='frame-alfa' href="#">Add a photo</a>
                </li>

                <li className='frame--lest'>
                    <img src="./assets/image/celebration.svg" alt="logo" />
                    <a className='frame-alfa' href="#">Celebrate an occasion</a>
                </li>

                <li className='frame--lest'>
                    <img src="./assets/image/person_pin.svg" alt="logo" />
                    <a className='frame-alfa' href="#">Find an expert</a>
                </li>

                <li className='frame--lest'>
                    <img src="./assets/image/poll.svg" alt="logo" />
                    <a className='frame-alfa' href="#">Create a poll</a>
                </li>
            </ol>
        </div>

        </div>
      </Page02>
    
  )
}


const Page02 = styled.div`

    .container{
        width: 360px !important;
        margin: 0 auto !important;
    }
    .contact
      width:100%;
      background-color:#000;
        height:128vh;
        border:6px solid #D0D0D0;
        border-radius: 20px;
        .contact-top{
          margin-top:64px;
          display: flex;
          alegn-items: center;
          
          
            
            .contact-hero{
            display: flex;
            color: #fff;
            gap: 16px;
          }

          .contact-hero{
            h3{
                color: #fff;
                font-size: 18px;
                line-height: 20px;
            }
          }

          .post{
            font-size: 18px;
            color: #A8A8A8;
            line-height: 20px;
            margin-left: 180px;
          }

          

          

        }
    }

    .Internit{
        position: absolute;  
        margin-left: -114px;
        top: 146px;
    }

    .paragraph{
        color: #D0D0D0;
        font-size: 18px;
        margin-top: 23px;
    }

    .arrow-drop{
        position:absolute;
        margin-left: -30px; 
        top: 146px;
    }

    .oscar{
        font-size: 16px;
        color: #fff;
        
      }

    .post-btn{
        width: 124px;
        height: 32px;
        color: #fff;
        background-color: #3333;
        border: 2px solid #fff;
        border-radius: 15px;
        margin-top: 8px;   
      }

      .post-btn:hover{
        background-color: #333;
              color: #fff;
              border: none;
      }

      .anyone{
        display: flex;
        gap: 14px;
        margin-top: 22px;
      }

      .contact-top--hero{
        background-color: #333;
        height: 253px;
        width: 380px;
        position:absolute;
        margin-top: 540px;
        margin-left: -10px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      }

      .frame--lest{
        display: flex;
        align-items: center;
        gap: 18px;
        margin-top: 20px;
      }

      .frame--lest{
        a{
            color: #fff;
        }
      }

      .frame--ol{
        margin-top: 54px;
        margin-left: -15px;
      }

      .Line1{
        width: 60px;
        height: 5px;
        border: 1px solid #fff;
        background-color: #fff;
        position:absolute;
        margin-left: 145px;
        margin-top: 15px;
      }

      .Line1:hover{
        cursor: pointer;
        transform: scale(0.8);
        color: #FF4B4B;
      }

      a{
        text-decoration: none;
      }

      .frame-alfa:hover{
        cursor: pointer;
        transform: scale(0.8);
        color: #FF4B4B;
      }
        
           
`

export default index

