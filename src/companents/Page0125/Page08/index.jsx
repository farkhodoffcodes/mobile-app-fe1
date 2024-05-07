import React from 'react'
import styled from 'styled-components'

const Page08 = () => {
  return (
    <div>
      <Page8>
        <section className='page08'>
            <div className="page08-container">
                <div className="page08-top">
                    <div className="page08-top-left">
                        <h3 className="price-name">
                            Balance
                            <i class="fa-solid fa-eye"></i>
                        </h3>
                        <ins className='price'>USD $2300.00</ins>
                    </div>

                    <div className="page08-top-right"></div>
                </div>
            </div>

            <hr />

            <div className="my-cards">
                <h2 className="my-card-heading">My Cards</h2>

                <div className="page08-container">
                    <p className="add-a-card">Add a card</p>
                    <img className='card' src="../assets/image/page08-card-img.svg" alt="rasm" />
                </div>
            </div>

            <div className="page08-bottom">
                <div className="page08-container">
                    <h2 className="page08-bottom-heading">Recent transaction</h2>
                    <ol className="page08-bottom-list">
                        <li className="page08-bottom-list-item">
                            <div className="page08-bottom-item-left"></div>
                            <div className="page08-bottom-item-center">
                                <h3 className='page08-bottom-item-heading'>Transaction #1</h3>
                                <ins className='page08-bottom-item-price'>$30.12</ins>
                            </div>
                            <button className='page08-bottom-item-btn'>Subscription</button>
                        </li>

                        <li className="page08-bottom-list-item">
                            <div className="page08-bottom-item-left"></div>
                            <div className="page08-bottom-item-center">
                                <h3 className='page08-bottom-item-heading'>Transaction #1</h3>
                                <ins className='page08-bottom-item-price'>$30.12</ins>
                            </div>
                            <button className='page08-bottom-item-btn'>Subscription</button>
                        </li>

                        <li className="page08-bottom-list-item">
                            <div className="page08-bottom-item-left"></div>
                            <div className="page08-bottom-item-center">
                                <h3 className='page08-bottom-item-heading'>Transaction #1</h3>
                                <ins className='page08-bottom-item-price'>$30.12</ins>
                            </div>
                            <button className='page08-bottom-item-btn'>Subscription</button>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
      </Page8>
    </div>
  )
}

const Page8 = styled.div`

    .page08-bottom{
        width:100%;
        background-color:#f4f4f4;
        border-radius:30px;
        height:auto;
        padding-top:30px;
        padding-bottom:39px;

        .page08-bottom-heading{
            font-size:20px;
            line-height:22px;
            color:#000;
            margin-bottom:28px;
        }

        .page08-bottom-list{
            display:flex;
            // align-items:center;
            flex-direction:column;
            gap:21px;
            .page08-bottom-list-item{
                display:flex;
                align-items:center;
                justify-content:space-between;

                .page08-bottom-item-left{
                    width:64px;
                    height:64px;
                    border-radius:8px;
                    background-color:#c4c4c4;
                }

                .page08-bottom-item-heading{
                    font-size:12px;
                    line-height:14px;
                    color:#000;
                }

                .page08-bottom-item-price{
                    font-size:28px;
                    line-height:36px;
                    color:#000;
                }

                .page08-bottom-item-btn{
                    width:95px;
                    height:28px;
                    border-radius:48px;
                    background-color:#000;
                    color:#fff;
                    font-weight:500;
                    font-size:10px;
                    line-height:12px;
                    cursor:pointer;
                }
            }   
        
        }
    }
    .page08{
        width:100%;
        height:auto;
        border:4px solid #000;
        border-radius:30px;
        padding-top:30px;
    }

    .page08-container{
        width:342px;
        margin:0 auto;
    }

    .page08-top{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:25px;

        .page08-top-left{
            .price-name{
                font-size:10px;
                line-height:12px;
                color:#000;
                display:flex;
                align-items:center;
                gap:9px;
                margin-bottom:4px;

                i{
                    font-size:14px;
                }
            }

            .price{
                font-size:16px;
                line-height:20px;
                color:#000;
                font-weight:bold;
            }
        }

        .page08-top-right{
            width:48px;
            height:48px;
            border-radius:8px;
            background-color:#c4c4c4;
        }
    }

    .my-cards{

        margin-bottom:45px;
        .my-card-heading{
            font-size:20px;
            line-height:22px;
            color:#000;
            margin-bottom:23px;
            margin-top:19px;
            margin-left:24px;
        }

        .page08-container{
            display:flex;
            align-items:center;
            gap:31px;

            

            .add-a-card{
                width:96px;
                height:30px;
                border-radius:48px;
                background-color:#f4f4f4;
                color:#000;
                font-size:12px;
                line-height:14px;
                display:flex;
                align-items:center;
                justify-content:center; 
                font-weight:bold;
                rotate:-90deg;
                cursor:pointer;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
        }
    }
`

export default Page08
