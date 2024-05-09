import React from 'react'
import styled from 'styled-components'

const Page09 = () => {
  return (
    <div>
      <Page9>
        <section className='page09'>
            <div className="page09-header">
                <div className="page09-container">
                    <div className="logo">
                        <i class="fa-regular fa-eye"></i>
                        Eyetube
                    </div>
                    <span className='header-icon'>
                        <i class="fa-solid fa-mobile"></i>
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span className='circle'></span>
                    </span>
                </div>
            </div>

            <hr />

            <nav className='page09-navbar'>
                <div className="page09-container">
                    <ol className="navbar-list">
                        <li className="navbar-list-item active">All</li>
                        <li className="navbar-list-item">Category #1</li>
                        <li className="navbar-list-item">Category #2</li>
                        <li className="navbar-list-item">Category #3</li>
                    </ol>
                </div>
            </nav>

            <div className="product">
                <div className="product-img"></div>
                <div className="product-profile">
                <div className="page09-container">
                    <div className="product-profile-img"></div>
                        
                            <div className="product-profile-desc">
                                <h3 className='profile-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                <p className="profile-artist">Artist · 3.7M views · 2 years ago</p>
                            </div>
                        </div>
                </div>
            </div>

            <hr />

            <div className="stuff">
                <div className="page09-container">
                    <h2 className="stuff-heading">Stuff that gets you hooked</h2>
                    <ol className="stuff-list">
                        <li className="stuff-list-item">
                            <span className='circle'></span>
                            <h3 className="stuff-item-artist-name">Artist name</h3>
                        </li>

                        <li className="stuff-list-item">
                            <span className='circle'></span>
                            <h3 className="stuff-item-artist-name">Artist name</h3>
                        </li>

                    </ol>
                </div>
            </div>

            <hr className='footer-hr'/>

            <footer className='footer'></footer>
        </section>
      </Page9>
    </div>
  )
}

const Page9 = styled.div`

    .footer{
        width:100%;
        height:106px;
        background-color:#c4c4c4;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;

    }

    .footer-hr{
        margin-bottom:17px;
    }

    .stuff{
        .page09-container{
            .stuff-heading{
                font-size:16px;
                line-height:20px;
                color:#000;
                margin-top:20px;
                margin-bottom:20px;            
            }

            .stuff-list{
                display:flex;
                align-items:center;
                flex-direction:row;
                gap:14px;
                margin-bottom:35px;
                .stuff-list-item{
                    width:140px;
                    height:200px;
                    border-radius:8px;
                    background-color:#c4c4c4;
                    position:relative;


                    .circle{
                        width:48px;
                        height:48px;
                        background-color:#262626;
                        border:2px solid #fff;
                        display:block;
                        border-radius:50%;
                        margin: 0 auto;
                        position:absolute;
                        bottom:32px;
                        left:45px;
                    }

                    .stuff-item-artist-name{
                        position:absolute;
                        bottom:8px;
                        left:35px;
                        font-size:12px;
                        line-height:16px;
                        color:#000;
                    }
                }
            }

        }
    }

    .product{
        margin-bottom:35px;
        .product-img{
            width:100%;
            height:205px;
            background-color:#c4c4c4;
            margin-bottom:12px;
        }

        .product-profile{
            .page09-container{
                display:flex;
                align-items:center;
                gap:12px;
            }

            .product-profile-img{
                width:88px;
                height:58px;
                border-radius:50%;
                background-color:#c4c4c4;
            }

            .product-profile-desc{
                .profile-heading{
                    font-size:14px;
                    line-height:20px;
                    color:#000;
                    font-weight:500;
                }

                .profile-artist{
                    font-size:14px;
                    line-height:20px;
                    color:#525252;
                }
            }
        }
    }

    .page09-navbar{
        margin-top:14px;
        margin-bottom:42px;
        .page09-container{
            .navbar-list{
                display:flex;
                align-items:center;
                justify-content:space-between;

                .navbar-list-item{
                    padding:8px 12px;
                    background-color:#fff;
                    color:#262626;
                    font-size:10px;
                    line-height:12px;
                    border-radius:48px;
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                    cursor:pointer;
                }

                .navbar-list-item.active{
                    color:#fff;
                    background-color:#000;
                }
            }
        }
    }

    hr{
        height:3px;
        background-color:#ababab;
    }

    .page09-header{
        margin-top:30px;
        margin-bottom:26px;
        width:100%;
        .page09-container{
            display:flex;
            align-items:center;
            justify-content:space-between;   
            // gap:124px;

            .logo{
                display:flex;
                align-items:center;
                gap:8px;
                font-size:16px;
                line-height:20px;
                color:#000;
                font-weight:bold;

                i{
                    font-size:30px;
                }
            }

            .header-icon{
                display:flex;
                align-items:center;
                gap:24px;
                font-size:20px;
                

                i{
                    cursor:pointer;
                }
            }

            .circle{
                width:24px;
                height:24px;
                background-color:#c4c4c4;
                display:block;
                border-radius:50%;
            }
        }
    }

    .page09{
        width:100%;
        height:auto;
        border:4px solid #000;
        border-radius:30px;
    }

    .page09-container{
        width:342px;
        margin:0 auto;
    }

`

export default Page09
