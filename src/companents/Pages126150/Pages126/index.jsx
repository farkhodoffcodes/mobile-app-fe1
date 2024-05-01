import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    <div className='page126'>
      <Page01>
        <section className='contact'>
          <div className="contact-top">
              
              
          </div>

          <form className='search'>
            <img className='photo--png' src="./assets/image/Ellipse 130.svg" alt="rasm" />
            <input className='search-input' type="search"  placeholder='Search'/>
            <img className='microphone' src="./assets/icons/microphone-solid.svg" alt="rasm" />
            <i class="fa-solid fa-magnifying-glass"></i>
            <img className='settengs' src="./assets/image/settings.png" alt="settengs" />
          </form>
         <hr className='Line'></hr>

         <div>

          <p className='Contact--paragraph'>People you may know from University of <br/> Washington</p>
          <ol className='Contact--iteam-ol'>
            <div>
            <li className='Contact--iteam-list'>
              <img className='contact--elle' src="./assets/image/Ellipse 131.svg" alt="rasm" />
              <h3 className='Contact--luxi-h3'>Luxi Wang</h3>
              <p className='Facebook'>SWE @ Facebook</p>
              <a className='Contact--alfa' href="#">78 mutual connection</a> <br />
              <button className='Contact--btn'>Connect</button>
            </li> 

            <li className='Contact--iteam-list'>
              <img className='contact--elle' src="./assets/image/Ellipse 131.svg" alt="rasm" />
              <h3 className='Contact--luxi-h3'>Luxi Wang</h3>
              <p className='Facebook'>SWE @ Facebook</p>
              <a className='Contact--alfa' href="#">78 mutual connection</a> <br />
              <button className='Contact--btn'>Connect</button>
            </li>
            </div>
            

            
            <div>
            <li className='Contact--iteam-list'>
              <img className='contact--elle' src="./assets/image/Ellipse 131.svg" alt="rasm" />
              <h3 className='Contact--luxi-h3'>Luxi Wang</h3>
              <p className='Facebook'>SWE @ Facebook</p>
              <a className='Contact--alfa' href="#">78 mutual connection</a> <br />
              <button className='Contact--btn'>Connect</button>
            </li>


            <li className='Contact--iteam-list'>
              <img className='contact--elle' src="./assets/image/Ellipse 131.svg" alt="rasm" />
              <h3 className='Contact--luxi-h3'>Luxi Wang</h3>
              <p className='Facebook'>SWE @ Facebook</p>
              <a className='Contact--alfa' href="#">78 mutual connection</a> <br />
              <button className='Contact--btn'>Connect</button>
            </li>
            </div>
            
            
          </ol>

          <h3 className='see--all'>See all</h3>
          <hr className='Line'></hr>
          <div className='Contact-half'>
          <li className='Contact--iteam-list1'>
              <img className='contact--elle' src="./assets/image/Ellipse 131.svg" alt="rasm" />
              <h3 className='Contact--luxi-h3'>Luxi Wang</h3>
              
            </li>

            <li className='Contact--iteam-list1'>
              <img className='contact--elle' src="./assets/image/Ellipse 131.svg" alt="rasm" />
              <h3 className='Contact--luxi-h3'>Luxi Wang</h3>
              
            </li>
          </div>
          
          </div> 
        </section>

        

        
      </Page01>
    </div>
  )
}


const Page01 = styled.div`

    
    .contact
      width:100%;
      background-color:#333333;
        height:128vh;
        border:6px solid #D0D0D0;
        border-radius: 20px;
        .contact-top{
          margin-top:64px;
          
        }

        .search{
          position:relative;
          margin-left:64px;
          margin-right:7px;
          margin-bottom:30px;

          .settengs{
            left: 20px;
            margin-left: 260px;
            top: 5px;
            position:absolute;   
          }

          input{
            width:264px;
            height:35px;
            border:none;
            border-radius:10px;
            background-color:#C4C4C4;
            padding-left:42px;
            color:#000;
            padding-right:20px;
            font-size:14px;
            line-height:18px;
            
          }

          i{
            position:absolute;
            left:15px;
            top:10px;

          }

          .microphone{
            left:240px;
            top:9px;
            width: 11px;
            height: 16px;
            color: #ffff;
            alegn-items: center;
            position: absolute;
          }

          .photo--png{
            position:absolute;
            left: -45px;
            top: 0px;  
            width: 30px;
            height: 30px;
            alegn-items: center;
          }
          
            }
            
            .Contact--paragraph{
              font-size:14px;
              color: #ffff;
              margin-left: 16px;
              margin-top: 13px;
            }

            .contact--elle{
              width: 80px;
              height: 80px;
              margin-left:39px;
              margin-top:10px;
            }

            .Contact--luxi-h3{
              font-size: 16px;
              color: #ffff;
              line-height:24px;
              text-align:center;
            }

            .Facebook{
              font-size: 16px;
              color: #A8A8A8;
              line-height:28px;
              text-align:center;
              
            }

            .Contact--alfa{
              font-size: 12px;
              color: #A8A8A8;
              line-height:28px;
              margin-left: 33px
              
            }

            .Contact--btn{
              width: 150px;
              height: 42px;
              color: #ffff;
              background-color:#3333;
              border: 2px solid #ffff;
              font-size: 14px;
              border-radius: 20px;
              
              margin-left: 10px;
            }

            .Contact--iteam-ol{
              display: flex;
              gap: 40px
             }

             .Contact--iteam-list{
              border: 2px solid #A8A8A8;
              width: 174px;
              height: 228px;
              border-radius:15px;
              margin-left: -28px;
              margin-top: 20px;
             }

             .Contact--iteam-list1{
              border: 2px solid #A8A8A8;
              width: 174px;
              height: 125px;
              border-radius:15px;
              border-bottom-right-radius: 0px;
              border-bottom-left-radius: 0px;
              margin-left: 10px;
              margin-top: 20px;
             }

            a{
              text-decoration: none;
            }

            ol,li{
              list-style: none;
            }
            
            .see--all{
              text-align: center;
              color: #ffff;
              margin-top: 20px;
              margin-bottom: 15px;
              font-size: 16px;
            }

            .Contact-half{
              display: flex;
            }
            .Line{
              border-bottom: 5px solid #D0D0D0;
            }
              }
           
`

export default index

