import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green'
import '@splidejs/react-splide/css/core';

const Page03 = () => {
  return (
    <div>
      <Page3>
        <section className="page03">

            <h2 className="page03-heading">Sally’s music</h2>
            <p className="img-number">20 of 321</p>
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img className="page03-splide-img" src="" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img className="page03-splide-img" src="" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img className="page03-splide-img" src="" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img className="page03-splide-img" src=""  />
          </SplideSlide>
          <SplideSlide>
            <img className="page03-splide-img" src="" alt="" />
          </SplideSlide>
        </Splide>

        <h2 className="song-name">Simply dangerous</h2>
        <p className="artist-name">Artist name</p>
        <input className="range-input" type="range" />

        <div className="song-control">
        <span className="start-time">0:34</span>
        <i class="fa-solid fa-forward-step"></i>
        <i class="fa-regular fa-circle-pause"></i>
        <i class="fa-solid fa-forward-step"></i>
        <span className="end-time">3:04</span>

        </div>

        <div className="page03-bottom-icon-wrapper">
            <img src="../assets/icons/page03-bottom-icon1.svg" alt="icon" />
            <img src="../assets/icons/page03-bottom-icon2.svg" alt="icon" />
            <img src="../assets/icons/page03-bottom-icon3.svg" alt="icon" />
        </div>
        </section>
      </Page3>
    </div>
  );
};

const Page3 = styled.div`

    .page03{
        width:100%;
        height:100vh;
        border-radius:30px;
        border:5px solid #000;
        .page03-splide-img{
            width:207px;
            height:300px;
            border-radius:24px;
            background-color:#ababab;
            margin-left:40px;
        }

        .page03-heading{
            font-size:16px;
            line-height:18px;
            color:#000;
            text-align:center;
            padding-top:50px;
        }

        .img-number{
            font-size:14px;
            line-height:18px;
            color:#000;
            text-align:center;
            margin-top:30px;
            margin-bottom:-40px;
        }

        .song-control{
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding-left:24px;
            padding-right:24px;

            i{
                cursor:pointer;
            }

            .start-time{
                font-size:14px;
                line-height:20px;
                color:#000;
            }

            .end-time{
                font-size:14px;
                line-height:20px;
                color:#d0d0d0;
            }
        }

        .song-name{
            font-size:20px;
            line-height:22px;
            color:#000;
            text-align:center;
            margin-top:-20px;
        }

        .artist-name{
            font-size:14px;
            line-height:20px;
            color:#000;
            text-align:center;
        }

        .range-input{
            width:342px;
            height:6px;
            border-radius:50px;
            margin-left:24px;
            margin-right:24px;
            margin-bottom:63px;
            margin-top:39px;
        }
    }

    .splide__arrow--prev{
        left:55px;
    }

    .splide__arrow--next{
        right:60px;
    }

    .splide__pagination__page{
        display:none;
    }

    .page03-bottom-icon-wrapper{
        display:flex;
        align-items:center;
        margin-top:30px;
        justify-content:center;
        gap:41px;

        img{
            cursor:pointer;
        }
    }

`;

export default Page03;
