import React from 'react'
import styled from 'styled-components'

const Page07 = () => {
  return (
    <div>
      <Page7>
        <section className='page07'>
            <div className="page07-container">

                <div className="page07-top">
                    <div className="page07-top-left">
                        <span className='profile'></span>
                        <h2 className="profile-name">John Doe</h2>
                    </div>
                    <i class="fa-solid fa-bell"></i>
                </div>

                <h2 className="page07-heading">Find your place to stay</h2>

                <form className='page07-form'>
                    <input className='search-input' type="search" placeholder='Search a country, location...'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>

                <div className="categories">
                    <div className="categories-top">
                        <h2 className="categories-heading1">Catagories</h2>
                        <h3 className="categories-heading2">See all</h3>
                    </div>

                    <ol className="categories-list">
                        <li className="categories-list-item">
                            <h3 className="categories-item-desc">House</h3>
                        </li>
                        <li className="categories-list-item">
                            <h3 className="categories-item-desc">House</h3>
                        </li>
                        
                        
                    </ol>
                </div>

                <div className="popular">
                    <div className="popular-top">
                        <h2 className="popular-top-heading1">Popular</h2>
                        <h3 className="popular-top-heading2">See all</h3>
                    </div>

                    <ol className="popular-list">
                            <li className="popular-list-item">
                                <div className="popular-item-heading">Tai Po Beach</div>
                                <span className='popular-item-location'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p className="popular-item-location-name">Kam Ling, Hong Kong</p>
                                </span>
                            </li>
                    </ol>
                </div>

                <hr />

                <footer className='footer'>
                    <span className='footer-home'>
                        <i class="fa-solid fa-house"></i>
                        <p className="footer-home-name">Home</p>
                    </span>

                    <i class="fa-solid fa-building-circle-exclamation"></i>
                    <i class="fa-solid fa-building-circle-exclamation"></i>
                    <i class="fa-solid fa-building-circle-exclamation"></i>
                </footer>
            </div>
        </section>
      </Page7>
    </div>
  )
}

const Page7 = styled.div`
    .page07{
        width:100%;
        height:auto;
        border:6px solid #000;
        border-radius:30px;
        .page07-container{
            width:342px;
            margin:0 auto;
            margin-top:20px;
            // padding-left:24px;
            // margin-right:240px;

            .page07-top{
                display:flex;
                align-items:center;
                justify-content:space-between;
                margin-bottom:25px;
                

                .page07-top-left{
                    display:flex;
                    align-items:center;
                    gap:10px;
                    .profile{
                        width:60px;
                        height:60px;
                        border-radius:50%;
                        background-color:#c4c4c4;    
                    }

                    .profile-name{
                        font-size:16px;
                        line-height:20px;
                        color:#000;
                    }

                }

                .fa-bell{
                    font-size:25px; 
                }
            }

            .page07-heading{
                font-size:24px;
                line-height:28px;
                color:#000;
            }

            .page07-form{
                position:relative;
                margin-top:20px;
                margin-bottom:45px;

                .search-input{
                    width:342px;
                    height:50px;
                    border-radius:6px;
                    border:none;
                    padding-left:41px;
                    background-color:#d0d0d0;
                    font-size:14px;
                    line-height:18px;
                }


                i{
                    position:absolute;
                    top:15px;
                    left:16px;
                }
            }

            .categories{
                margin-bottom:52px;
                .categories-top{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin-bottom:30px;

                    .categories-heading1{
                        font-size:20px;
                        line-height:22px;
                        color:#000;
                    }

                    .categories-heading2{
                        font-size:14px;
                        line-height:18px;
                        color:#000;
                    }
                }

                .categories-list{
                    padding:0;
                    display:flex;
                    align-items:center;
                    gap:17px;
                    .categories-list-item{
                        width:109px;
                        height:140px;
                        border-radius:8px;
                        background-color:#c4c4c4;
                        position:relative;

                        .categories-item-desc{
                            position:absolute;
                            bottom:0px;
                            text-align:center;
                            width:109px;
                            height:39px;
                            background-color:#525252;
                            border-bottom-left-radius:8px;
                            border-bottom-right-radius:8px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            color:#fff;
                            font-weight:400;
                        }
                    }
                }
            }


            .popular{
                margin-bottom:14px;
                .popular-top{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin-bottom:19px;

                    .popular-top-heading1{
                        font-size:20px;
                        line-height:22px;
                        color:#000;
                    }

                    .popular-top-heading2{
                        font-size:14px;
                        line-height:18px;
                        color:#000;
                    }

                    
                }

                .popular-list{
                    .popular-list-item{
                        width:244px;
                        height:165px;
                        border-radius:8px;
                        background-color:#d0d0d0;


                        .popular-item-heading{
                            padding-top:115px;
                            padding-left:15px;
                            font-weight:bold;
                            font-size:16px;
                            line-height:20px;
                        }

                        .popular-item-location{
                            display:flex;
                            align-items:center;
                            padding-left:15px;
                            gap:4px;

                            .popular-item-location-name{
                                font-size:10px;
                                line-height:12px;
                            }
                        }
                    }
                }
            }

            .footer{
                display:flex;
                align-items:center;
                justify-content:space-between;
                width:100%;
                height:90px;
                // border:1px solid #e0e0e0;

                .footer-home{
                    display:flex;
                    align-items:center;
                    gap:4px;
                }
            }
        }
    }
`

export default Page07
