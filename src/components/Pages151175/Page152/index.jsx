import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    <>
    <Container>
        <div className='page-bg'>
          <header>
              <button>
                  <img src="../assets/image/arrow-back.svg" alt="back" /> 
              </button>
              <p>FILTER CLASSES</p>
          </header>
          <main>
              <div className='grey-row'>
                <div>
                  <p>Intro</p>
                  <span>20s</span>
                </div>
              </div>
              <div className='grey-row'>
                <div>
                <p>Warm up</p>
                <span>1min 30s</span>
                </div>
                <div>
                  <img src="../assets/image/arrow_down.svg" alt="arrow" />
                </div>
              </div>
              <div className='drop-menu'>
                    <ul>
                      <li>
                        <p>Slow Walkout / Overhead Reach</p>
                        <span>30s</span>
                      </li>
                      <li>
                        <p>Dynamic Spiderman</p>
                        <span>30s</span>
                      </li>
                      <li>
                        <p>Squat With Reach & Rotation</p>
                        <span>30s</span>
                      </li>
                    </ul>
                  </div>
              <div className='green-row'>
                <p>Rest</p>
                <span>30s</span>
              </div>
              <div className='grey-row'>
                <div>
                  <p>Workout</p>
                  <span>5min 50s</span>
                </div>
                <div>
                  <img src="../assets/image/arrow_down.svg" alt="arrow" />
                </div>
              </div>
              <div className='green-row'>
                <p>Rest</p>
                <span>30s</span>
              </div>
              <div className='grey-row'>
                <div>
                  <p>Stretch</p>
                  <span>5min 00s</span>
                </div>
                <div>
                  <img src="../assets/image/arrow_down.svg" alt="arrow" />
                </div>
              </div>
              <div className='green-row'>
                <p>Wrap up</p>
                <span>30s</span>
              </div>
          </main>
        </div>
          
    </Container>
    </>
    
  )
}

const Container = styled.div`
    background-color: #000;
    border-radius: 30px;
    font-weight: 400;
    font-family: "Ibarra Real Nova", serif;
    font-size: 18px;
    padding-bottom: 120px;

    p, span{
      color: #fff;
    }

    button{
      background-color: transparent;
      border: none;
    }
    header{
      display: flex;
      gap: 20px;
      padding: 30px 20px;
      p{
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      }
    }
    main{
      p{
          font-size: 16px;
        }
      span{
          font-size: 14px;
        }
      .grey-row{
        display: flex;
        justify-content: space-between;
        background-color: #525252;
        padding: 15px;
        
      }
      .drop-menu{
          ul{
            li{
              display: flex;
              justify-content: space-between;
              padding: 20px 20px 20px 0px;
              color: #fff;
              p{
                font-size: 14px;
              }
            }
          }
        }
      .green-row{
        background-color: #3A595D;
        padding: 15px;
      }
    }
`


export default index
