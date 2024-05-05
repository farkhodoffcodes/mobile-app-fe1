import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const index = () => {
  return (
    <>
    <Container>
        <div className='page-bg'>
          <header>
              <button>
                  <img src="../assets/image/back-blck.svg" alt="back" /> 
              </button>
              <p>FILTER CLASSES</p>
          </header>
          <main>
              <Link to={'/page153'}>
                <div className='grey-row'>
                  <div>
                    <p>Intro</p>
                    <span>20s</span>
                  </div>
                </div>
              </Link>
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
                <p>Wrap up & end workout</p>
                <span>30s</span>
              </div>
          </main>
        </div>
          
    </Container>
    </>
  )
}

const Container = styled.div`

    border-radius: 30px;
    font-weight: 400;
    font-family: "Ibarra Real Nova", serif;
    font-size: 18px;
    padding-bottom: 120px;

    a{
      text-decoration: none;
      color: #000;
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

      font-size: 14px;
      font-weight: 600;
      }
    }
    main{
      p{
          font-size: 18px;
          font-weight: bold;
        }
      span{
          font-size: 14px;
        }
      .grey-row{
        display: flex;
        justify-content: space-between;
        background-color: #F2F2F2;
        padding: 12px;
        
      }
      .drop-menu{
          ul{
            margin: 0;
            padding: 0;
            li{
              display: flex;
              justify-content: space-between;
              padding: 20px 12px;
              border-bottom: 1px solid #525252;

              p{
                font-size: 14px;
              }
            }
            li:last-child{
                border: none;
            }
          }
        }
      .green-row{
        background-color: #B882D9;
        padding: 12px;
        color: #F2F2F2;
        
      }
    }
`

export default index
