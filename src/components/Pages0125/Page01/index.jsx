import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    <div>
      <Page01>
        <section className='contact'>
          <div className="contact-top">
              <h1>Contacts</h1>
              <i class="fa-solid fa-plus"></i>
          </div>

          <form className='search'>
            <input className='search-input' type="search"  placeholder='Contacts'/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </form>

          <span className='last-contact'>
          <h2 className="last-contact-heading">Last contacted</h2>
              <ol className='last-contact-list'>
                <li className="last-contact-list-item">
                  <span className='circle'></span>
                </li>
                <li className="last-contact-list-item">
                  <span className='circle'></span>
                </li>
                <li className="last-contact-list-item">
                  <span className='circle'></span>
                </li>
                <li className="last-contact-list-item">
                  <span className='circle'></span>
                </li>
                <li className="last-contact-list-item">
                  <span className='circle'></span>
                </li>
              </ol>
          </span>

          <div className="contact-bottom-main">
            <ol className="contact-bottom-main-list">
              <li className='contact-bottom-main-item'>
                <div className="contact-bottom-main-item-left"></div>
                <div className="contact-bottom-main-item-right">
                  <span className='top'>
                    <h3>Justin Wan</h3>
                    <span className='hour'>14:23</span>
                  </span>
                  <p>Lorem ipsum dolor sit amet, consect...</p>
                </div>
              </li>

              <li className='contact-bottom-main-item'>
                <div className="contact-bottom-main-item-left"></div>
                <div className="contact-bottom-main-item-right">
                  <span className='top'>
                    <h3>Justin Wan</h3>
                    <span className='hour'>14:23</span>
                  </span>
                  <p>Lorem ipsum dolor sit amet, consect...</p>
                </div>
              </li>

              <li className='contact-bottom-main-item'>
                <div className="contact-bottom-main-item-left"></div>
                <div className="contact-bottom-main-item-right">
                  <span className='top'>
                    <h3>Justin Wan</h3>
                    <span className='hour'>14:23</span>
                  </span>
                  <p>Lorem ipsum dolor sit amet, consect...</p>
                </div>
              </li>

              <li className='contact-bottom-main-item'>
                <div className="contact-bottom-main-item-left"></div>
                <div className="contact-bottom-main-item-right">
                  <span className='top'>
                    <h3>Justin Wan</h3>
                    <span className='hour'>14:23</span>
                  </span>
                  <p>Lorem ipsum dolor sit amet, consect...</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </Page01>
    </div>
  )
}


const Page01 = styled.div`
    .contact{
      width:100%;
      height:100vh;
      border:4px solid #000;
      border-radius: 20px;
      .contact-top{
        margin-top:60px;
        padding-left:24px;
        padding-right:7px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:22px;

        h1{
          font-size:24px;
          line-height:28px;
          color:#000;
        
        }

        i{
          width:25px;
          height:25px;
          border-radius:50%;
          background-color:#000;
          color:#fff;
          display:flex;
          justify-content:center;
          align-items:center;
          cursor:pointer;
        }
      }

      .search{
        position:relative;
        margin-left:24px;
        margin-right:7px;
        margin-bottom:30px;

        input{
          width:342px;
          height:50px;
          border:none;
          border-radius:20px;
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
          top:18px;

        }
      }

      .last-contact{
        display:block;
        margin-left:24px;
        margin-right:7px;
        margin-bottom:29px;

        .last-contact-heading{
          font-size:14px;
          line-height:18px;
          color:#000;
          margin-bottom:25px;
        }
        .last-contact-list{
          list-style:none;
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          flex-direction:row;
          gap:19px;
          padding:0;
          .last-contact-list-item{
            width:56px;
            height:56px;
            border-radius:10px;
            background-color:#c4c4c4;
            position:relative;

            .circle{
              width:18px;
              height:18px;
              border-radius:50%;
              background-color:#333;
              display:block;
              position:absolute;
              bottom:-4px;
              right:-4px;
            }
          }
        }
      }

      .contact-bottom-main{
        width:100%;
        height:378px;
        background-color:#f4f4f4;
        border-radius:24px;
        

        .contact-bottom-main-list{
          display:flex;
          align-items:center;
          list-style:none;
          padding-top:44px;
          flex-direction:column;
          gap:24px;
          .contact-bottom-main-item{
            display:flex;
            align-items:center;
            gap:14px;

            .contact-bottom-main-item-left{
              width:60px;
              height:60px;
              border-radius:8px;
              background-color:#c4c4c4;
            }

            .contact-bottom-main-item-right{
              .top{
                display:flex;
                align-items:center;
                justify-content:space-between;
                margin-bottom:3px;

                h3{
                  font-size:16px;
                  line-height:20px;
                  color:#000;
                }

                .hour{
                  font-size:14px;
                  line-height:18px;
                  color:#ababab
                }

                p{
                  font-size:14px;
                  line-height:18px;
                  color:#000;
                }
              }
            }

          }
        }
      }
    }
`

export default index

