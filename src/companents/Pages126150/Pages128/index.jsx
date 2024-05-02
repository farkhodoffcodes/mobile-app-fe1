import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    
      <Page03>
        <div className='container'>
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

              <div className='Recommended'>
                <h1 className='Recommended--h1'>Recommended for you</h1>
                <ol className='Recommended--ol'>
                    <li className='Recommended--lest'>
                      <div>
                      <img className='Rectangle--284' src="./assets/image/Rectangle 284.svg" alt="logo" /> 
                      </div>
                    <div className='Rectangle--hero'>
                    <h3 className='Rectangle--product'>Product Designer</h3>
                    <img className='save' src="./assets/image/save.svg" alt="img" />
                    <h4 className='Rectangle--facebook'>Facebook</h4>
                    <p className='Rectangle--Wa'>Seattle, WA</p>
                    <div className='Ellipse--end'>
                    <img className='Ellipse--img' src="./assets/image/Ellipse1.svg" alt="logo" />
                    <img className='Ellipse--img1' src="./assets/image/Ellipse2.svg" alt="logo" />
                    <img className='Ellipse--img2' src="./assets/image/Ellipse3.svg" alt="logo" /> 
                    <p className='Rectangle--20'>20 connections work here</p>
                    </div>
                   
                    <p className='Rectangle--weeks'>2 weeks ago</p>
                    <hr className='Line1'></hr>
                    </div>
                    
                    </li>


                    <li className='Recommended--lest'>
                      <div>
                      <img className='Rectangle--284' src="./assets/image/Rectangle 284.svg" alt="logo" /> 
                      </div>
                    <div className='Rectangle--hero'>
                    <h3 className='Rectangle--product'>Associate UX Designer</h3>
                    <img className='save' src="./assets/image/save.svg" alt="img" />
                    <h4 className='Rectangle--facebook'>Facebook</h4>
                    <p className='Rectangle--Wa'>Seattle, WA</p>
                    <div className='Ellipse--end'>
                    <img className='Ellipse--img' src="./assets/image/Ellipse4.svg" alt="logo" />
                    <img className='Ellipse--img1' src="./assets/image/Ellipse5.svg" alt="logo" />
                    <img className='Ellipse--img2' src="./assets/image/Ellipse6.svg" alt="logo" /> 
                    <p className='Rectangle--20'>20 connections work here</p>
                    </div>
                   
                    <p className='Rectangle--weeks'>2 weeks ago</p>
                    <hr className='Line1'></hr>
                    </div>
                    
                    </li>


                    <li className='Recommended--lest'>
                      <div>
                      <img className='Rectangle--284' src="./assets/image/Rectangle 284.svg" alt="logo" /> 
                      </div>
                    <div className='Rectangle--hero'>
                    <h3 className='Rectangle--product'>Sr. UX Researcher</h3>
                    <img className='save' src="./assets/image/save.svg" alt="img" />
                    <h4 className='Rectangle--facebook'>Facebook</h4>
                    <p className='Rectangle--Wa'>Seattle, WA</p>
                    <div className='Ellipse--end'>
                    <img className='Ellipse--img' src="./assets/image/Ellipse7.svg" alt="logo" />
                    <img className='Ellipse--img1' src="./assets/image/Ellipse8.svg" alt="logo" />
                    <img className='Ellipse--img2' src="./assets/image/Ellipse 133.svg" alt="logo" /> 
                    <p className='Rectangle--20'>20 connections work here</p>
                    </div>
                   
                    <p className='Rectangle--weeks'>2 weeks ago</p>
                    
                    </div>
                    
                    </li> 
                </ol>
                <hr className='Line2'></hr>

                <div className='Remote--hero'>
                  <h1 className='Recommended--h1'>Remote opportunities</h1>
                  <p className='Recommended--h111'>Because you expresse interest in remote work</p>
                  <ol>
                  <li className='Recommended--lest1'>
                      <div>
                      <img className='Rectangle--284' src="./assets/image/Rectangle 284.svg" alt="logo" /> 
                      </div>
                    <div className='Rectangle--hero'>
                    <h3 className='Rectangle--product'>Product Designer</h3>
                    <img className='save' src="./assets/image/save.svg" alt="img" />
                    <h4 className='Rectangle--facebook'>Facebook</h4>
                    <p className='Rectangle--Wa'>Seattle, WA</p>
                    <div className='Ellipse--end'>
                    <img className='Ellipse--img' src="./assets/image/Ellipse10.svg" alt="logo" />
                    <img className='Ellipse--img1' src="./assets/image/Ellipse11.svg" alt="logo" />
                    <img className='Ellipse--img2' src="./assets/image/Ellipse12.svg" alt="logo" /> 
                    <p className='Rectangle--20'>20 connections work here</p>
                    </div>
                   
                    <p className='Rectangle--weeks'>2 weeks ago</p>
                    <hr className='Line12'></hr>
                    </div>
                    
                    </li>

                    
                  </ol>
                </div>
              </div>
        </section>
        </div>
      </Page03>
    
  )
}


const Page03 = styled.div`

    // .container{ 
    //     width: 360px !important;
    //     margin: 0 auto !important;
    // }
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
            left: 50px;
            margin-left: 230px;
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
            position:absolute;   
          }

          .search-input:hover{
            cursor: pointer;
        }

          .search-input::before {
            content: "Qo'shimcha matn"; 
            position: absolute;
            left: 5px; 
            top: 50%; 
            transform: translateY(-50%); 
            color: #999; 
            font-size: 14px; 
        }

          i{
            position:absolute;
            left:15px;
            top:10px;
            color: #fff;
          }

          .microphone{
            left:240px;
            top:9px;
            width: 11px;
            height: 16px;
            color: #fff;
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
        .Recommended{
          top: 120px;
          position:absolute;
          
        }

        

        .Recommended--h1{
          font-size: 18px;
          color: #fff;
          line-height: 20px;
          margin-left: 17px;
        }

        .Recommended--h111{
          font-size: 16px;
          color: #fff;
          line-height: 20px;
          margin-left: 17px;
        }

        .Recommended--ol{
          margin-left: -21px;
          margin-top: 16px;
        }

        .Recommended--lest{
          display: flex;
          alegn-items: center;
          gap: 16px;
          margin-top: 10px;
        }

        .Recommended--lest1{
          display: flex;
          alegn-items: center;
          gap: 16px;
          margin-top: 10px;
          margin-left: -20px;
        }

        .Ellipse--img{
          width: 25px;
          height: 25px;
          border: 1px solid #fff;
          border-radius: 30px;
          position: absolute;
        }

        .Ellipse--img1{
          width: 25px;
          height: 25px;
          border: 1px solid #fff;
          border-radius: 30px;
          position: absolute;
          margin-left: 16px;
        }

        .Ellipse--img2{
          width: 25px;
          height: 25px;
          border: 1px solid #fff;
          border-radius: 30px;
          position: absolute;
          margin-left: 30px;
        }


        .Ellipse--end{
          display: flex;
          alegn-items: center;
        }
        .Rectangle--284{
          width: 39px;
          height: 39px;
          margin-top: 9px;
          
        }

        .Rectangle--product{
          font-size: 18px;
          color: #fff;
          line-height: 20px;
          
        }

        .Rectangle--facebook{
          font-size: 16px;
          color: #fff;
          line-height: 25px;
        }

        .Rectangle--Wa{
          font-size: 18px;
          color: #A8A8A8;
          line-height: 30px;
        }

        .Rectangle--20{
          font-size: 14px;
          color: #A8A8A8;
          line-height: 30px;
          margin-left: 63px;
          margin-top: 0px;
        }

        .Rectangle--weeks{
          font-size: 14px;
          color: #A8A8A8;
          line-height: 30px;

        }

        .Rectangle--hero{
          margin-top: 8px;
         
        }

        .save{
          position: absolute;
          margin-left: 270px;
          margin-top: -10px;
        }

        .Line1{
          width: 308px;
          margin-left: -20px;
          margin-top: 10px;
        }

        .Line12{
          width: 308px;
          margin-left: -30px;
          margin-top: 10px;
        }

        .Line2{
          width: 380px;
          margin-left: -1px;
          margin-top: 10px;
          border: 2px solid #A8A8A8;
          margin-top: 30px;
        }

        .Remote--hero{
          margin-top: 20px;
        }


           
`

export default index

