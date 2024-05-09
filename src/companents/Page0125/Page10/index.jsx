import React from 'react'
import styled from 'styled-components'

const Page10 = () => {
  return (
    <div>
      <Page010>
        <section className='page10'>
            <div className="page10-container">
                <div className="profile-top">
                    <h2 className="profile-heading">John Doe</h2>
                    <span className='profile-img'></span>
                    <p className="profile-nick-name">@johnamazingdoe</p>

                    <div className="profile-follow-wrapper">
                        <div className="following">
                            <p>9</p>
                            Following
                        </div>
                        <div className="followers">
                            <p>129K</p>
                            Followers
                        </div>
                        <div className="views">
                            <p>7.2M</p>
                            views
                        </div>
                    </div>

                    <div className="profile-btn-wrapper">
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>

                <div className="profile-main">
                    <div className="profile-main-top">
                        <div className="photos">
                            <i class="fa-solid fa-image"></i>
                            Photos
                            
                        </div>
                        <div className="videos">
                            <i class="fa-solid fa-image"></i>
                            Videos
                        </div>
                        <div className="tagged">
                            <i class="fa-regular fa-face-smile"></i>
                            Tagged
                        </div>
                    </div>

                    <div className="post">
                        <img src="../assets/image/page10-img1.png" alt="rasm" />
                        <img src="../assets/image/page10-img1.png" alt="rasm" />
                        <img src="../assets/image/page10-img1.png" alt="rasm" />
                        <img src="../assets/image/page10-img1.png" alt="rasm" />
                        <img src="../assets/image/page10-img1.png" alt="rasm" />
                        <img src="../assets/image/page10-img1.png" alt="rasm" />
                    </div>
                </div>
            </div>
        </section>
      </Page010>
    </div>
  )
}

const Page010 = styled.div`

    .profile-main{
        .profile-main-top{
            display:flex;
            align-items:center;
            justify-content:space-between;
            font-size:14px;
            line-height:18px;
            color:#ababab;
            font-weight:bold;
            margin-bottom:39px;

            div{
                display:flex;
                align-items:center;
                gap:4px;
                padding-bottom:14px;
            }

            .photos{
                color:#000;
                border-bottom:2px solid #000 ;
                padding-bottom:14px;
            }
        }

        .post{
            display:flex;
            align-items:center;
            flex-direction:row;
            flex-wrap:wrap;

            img{
                width:110px;
                height:110px;
            }
        }
    }

    .profile-top{
        .profile-heading{
            font-size:20px;
            line-height:22px;
            color:#000;
            text-align:center;
            margin-bottom:35px;
        }

        .profile-img{
            width:98px;
            height:98px;
            border-radius:50%;
            background-color:#c4c4c4;
            display:block;
            margin:0 auto;
            margin-bottom:19px;
        }

        .profile-nick-name{
            font-size:14px;
            line-height:18px;
            color:#000;
            text-align:center;
            margin-bottom:54px;
        }

        .profile-follow-wrapper{
            display:flex;
            align-items:center;
            justify-content:space-between;
            text-align:center;
            font--size:14px;
            line-height:18px;
            color:#ababab;
            margin-bottom:36px;

            p{
                font-weight:bold;
                color:#000;
            }
        }

        .profile-btn-wrapper{
            display:flex;
            align-tems:center;
            justify-content:space-between;
            margin-bottom:57px;

            .follow, .message{
                width:92px;
                height:42px;
                border-radius:8px;
                border:none;
                background-color:#d0d0d0;
                font-weight:bold;
                color:#000;
                cursor:pointer;
                transition:all .3s ease-in;

                &:hover{
                    transition:all .3s ease-in;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }
            }
        }
    }

    .page10{
        width:100%;
        height:auto;
        border:4px solid #000;
        border-radius:30px;
        padding-top:35px;
        padding-bottom:46px;

        .page10-container{
            width:342px;
            margin:0 auto;
        }
    }
`

export default Page10
