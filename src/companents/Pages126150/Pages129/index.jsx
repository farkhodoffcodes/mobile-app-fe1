import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    
      <Page04>
        
        <section className='contact'>
        <div className='container'>
          <div className="contact-top">
            <div className='contact-hero'>
              <img className='close--img' src="./assets/image/close.svg" alt="rasm" /> 
              
            </div>
                <img className='team-work--img' src="./assets/image/team-work 1.svg" alt="logo"/>
                <h1 className='phone-based'>Notification required for phone-based step features</h1>
                <p className='phone-based--paragraph'>Limbit cannot accruately use your phone’s pedometer without a foreground notification</p>
          </div>

          <div className='button-plurals'>
            <button className='Okay--btn'>Okay</button>
            <a className='Unpair--btn' href="#">Unpair</a>
          </div>
           
          </div>
        </section>
        
      

      </Page04>
    
  )
}

const Page04 = styled.div`

.contact
width:100%;
background-color:#333333;
  height:128vh;
  border:6px solid #D0D0D0;
  border-radius: 20px;
  
  .contact-top{
    margin-top:64px;

    
    }
        .container{
            width: 360px !important;
            margin: 0 auto !important;
        }

        .team-work--img{
            width: 200px;
            height: 200px;
            align-items:center;
            margin-left: 70px;  
            margin-top: 40px; 
    }

        .phone-based{
            font-size: 32px;
            color: #fff;
            text-align: center;
            margin-top: 25px;
        }

        .phone-based--paragraph{
            font-size: 18px;
            color: #fff;
            text-align: center;
            margin-top: 22px;
        }

        .Okay--btn{
            width: 357px;
            height: 42px;
            border: 1px solid red;
            border-radius: 30px;
            color: #FF4B4B;
            font-size: 18px;
            font-weight: bold;
            background-color: #333;
            margin-top: 20px;
            display: inline-block;
            text-decoration: none;
            transition: background-color 0.3s, color 0.3s;
    
        }

        .Okay--btn:hover{
            cursor: pointer;
            background-color: #fff;
              color: #000;
              border: none;
            
        }

        .Okay--btn:active {
            background-color: #0000;
        }

        .Unpair--btn{
            font-size: 16px;
            color: #fff;
            align: center;
            position: absolute;
            margin-top: 80px;
            text-decoration: none;
            margin-left: -205px;
            font-weight: bold;
        }

        .Unpair--btn:hover{
            cursor: pointer;
            color: #FF4B4B;
        }

        .button-plurals{
            margin-top: 187px;
        }
      
   
  }
 

  

  
`

export default index
