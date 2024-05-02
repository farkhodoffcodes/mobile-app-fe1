import React from 'react'
import styled from 'styled-components'

const Page06 = () => {
  return (
    <div>
      <Page6>
        <section className='page06'> 
            <div className="page06-container">
                <div className="page06-top">

                    <div className="page06-top-left">
                        <h2 className="page06-top-heading">Hi, John</h2>
                        <p className="page06-top-date">Jun 24th, 2021</p>
                    </div>
                    <i class="fa-solid fa-bell"></i>

                </div>

                <form className='search'>
                    <input className='search-input' type="search"  placeholder='Search...'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>

                <div className="happy-wrapper">
                    <div className="happy-top">
                        <h3 className="happy-top-heading">How do you feel today?</h3>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>

                    <ol className="happy-list">
                        <li className="happy-list-item">
                            <span><p>😄</p></span>
                            <p className="happy-list-item-desc">Happy #1</p>
                        </li>

                        <li className="happy-list-item">
                            <span><p>😆</p></span>
                            <p className="happy-list-item-desc">Happy #1</p>
                        </li>

                        <li className="happy-list-item">
                            <span><p>😊</p></span>
                            <p className="happy-list-item-desc">Happy #1</p>
                        </li>

                        <li className="happy-list-item">
                            <span><p>😊</p></span>
                            <p className="happy-list-item-desc">Happy #1</p>
                        </li>
                    </ol>
                </div>
                </div>

                <div className="excercises">
                    <div className="page06-container">
                    <div className="excercises-top">
                        <h2 className="excercises-top-heading">Excercises</h2>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>

                    <ol className="excercises-list">
                        <li className="excercises-list-item">
                            <div className="excercises-list-item-left"></div>
                            <div className="excercises-list-item-right">
                                <h3 className="excercises-list-item-heading">Excercise #1</h3>
                                <p className="excercises-list-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>

                        <li className="excercises-list-item">
                            <div className="excercises-list-item-left"></div>
                            <div className="excercises-list-item-right">
                                <h3 className="excercises-list-item-heading">Excercise #1</h3>
                                <p className="excercises-list-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                    </ol>
                    </div>
                </div>

                <footer className='footer'>
                    <div className="page06-container">
                        <i class="fa-solid fa-circle-pause"></i>
                        <i class="fa-solid fa-wifi"></i>
                        <i class="fa-solid fa-wifi"></i>
                        <i class="fa-solid fa-address-book"></i>
                    </div>
                </footer>
            {/* </div> */}
        </section>
      </Page6>
    </div>
  )
}

const Page6 = styled.div`
    .page06{
        width:100%;
        height:auto;
        border:5px solid #000;
        border-radius:30px;
        .page06-container{
            width:343px;
            margin:0 auto;

            .page06-top{
                display:flex;
                align-items:center;
                justify-content:space-between;
                margin-top:39px;
                margin-bottom:25px;

                .page06-top-heading{
                    color:#000;
                    font-size:20px;
                    line-height:22px;
                }

                .page06-top-date{
                    font-size:16px;
                    line-height:24px;
                    color:#000;
                }

                i{
                    font-size:30px;
                }
            }


            .search{
                position:relative;
                margin-bottom:31px;
                .search-input{
                    width:342px;
                    height:55px;
                    border-radius:8px;
                    background-color:#d0d0d0;
                    border:none;
                    padding-left:41px;
                    font-size:14px;
                    line-height:18px;
                    color:#525252;
                    padding-right:20px;
                }

                i{
                    position:absolute;
                    left:15px;
                    top:19px;
                }
            }

            .happy-wrapper{
                .happy-top{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin-bottom:28px;

                        .happy-top-heading{
                            font-size:14px;
                            line-height:18px;
                            color:#000;

                        }
                }

                .happy-list{
                    padding:0px;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin-bottom:41px;
                    .happy-list-item{
                        span{
                            width:50px;
                            height:50px;
                            border-radius:8px;
                            background-color:#d0d0d0;
                            display:block;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            margin-bottom:8px;


                                p{
                                    font-size:30px;
                                }
                        }

                        .happy-list-item-desc{
                            font-size:12px;
                            line-height:16px;
                            color:#000;
                        }
                    }
                }
            }


            }
        }
    }

    .excercises{
        width:100%;
        height:auto;
        background-color:#f4f4f4;
        border-radius:30px;
        border-bottom-left-radius:0px;
        border-bottom-right-radius:0px;

        padding-top:50px;

        .excercises-top{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:25px;

            .excercises-top-heading{
                font-size:14px;
                line-height:18px;
                color:#000;
            }
        }

        .excercises-list{
            padding:0px;
            display:flex;
            align-items:center;
            flex-direction:column;
            gap:18px;
            .excercises-list-item{
                width:341px;
                height:92px;
                border-radius:8px;
                border:1px solid #262626;
                display:flex;
                align-items:center;
                gap:10px;
                                
                .excercises-list-item-left{
                    width:78px;
                    height:58px;
                    border-radius:8px;
                    background-color:#262626;
                    margin-left:19px;

                    .excercises-list-item-heading{
                        font-size:14px;
                        line-height:18px;
                        color:red;
                    }

                }

                .excercises-list-item-heading{
                    font-size:14px;
                    line-height:18px;
                    color:#000;
                }

                .excercises-list-item-desc{
                    font-size:12px;
                    line-height:16px;
                    color:#000;
                }
            }
        }}

        .footer{
            width:100%;
            display:flex;
            height:100px;
            background-color:#fff;
            border-bottom-left-radius:30px;
            border-bottom-right-radius:30px;
            .page06-container{
                width:100%;
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
        }
`

export default Page06
