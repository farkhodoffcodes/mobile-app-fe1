import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Page04 = () => {
  return (
    <div>
      <Page4>
        <section className="page04">
          <div className="page04-top">
            <i class="fa-solid fa-chevron-left page04-top-icon"></i>
            <i class="fa-solid fa-ellipsis page04-top-icon"></i>

            <i class="fa-regular fa-circle-play top-play-icon"></i>
          </div>

          <div className="page04-main-wrapper">
            <div className="follow-wrapper">
              <span className="songs">
                Songs
                <p className="song-number">56</p>
              </span>

              <span className="followers">
                Followers
                <p className="follower-number">7556</p>
              </span>

              <span className="following">
                Following
                <p className="following-number">390</p>
              </span>
            </div>

            <div className="popular">
              <h2 className="popular-heading">Popular</h2>
              <Splide aria-label="My Favorite Images">
                <SplideSlide>
                  <div className="popular-box">
                    <i class="fa-regular fa-circle-play top-play-icon"></i>
                  </div>
                  <p className="album-name">Album name</p>
                </SplideSlide>
                <SplideSlide>
                  <div className="popular-box">
                    <i class="fa-regular fa-circle-play top-play-icon"></i>
                  </div>
                  <p className="album-name">Album name</p>
                </SplideSlide>
                <SplideSlide>
                  <div className="popular-box">
                    <i class="fa-regular fa-circle-play top-play-icon"></i>
                  </div>
                  <p className="album-name">Album name</p>
                </SplideSlide>
                <SplideSlide>
                  <div className="popular-box">
                    <i class="fa-regular fa-circle-play top-play-icon"></i>
                  </div>
                  <p className="album-name">Album name</p>
                </SplideSlide>
              </Splide>
            </div>

            <div className="singles">
              <h2 className="singles-heading">Singles</h2>
              <div className="singles-wrapper">
                <div className="singles-left"></div>
                <div className="singles-center">
                  <h3 className="singles-center-heading">Song title here</h3>
                  <p className="singles-center-year">2020</p>
                </div>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
        </section>
      </Page4>
    </div>
  );
};

const Page4 = styled.div`
  .singles {
    color: #fff;
    margin-left:24px;
    padding-right:50px;
    padding-bottom:37px;


    .singles-heading {
      font-size: 20px;
      line-height: 22px;
      color: #fff;
      margin-bottom:16px;
    }

    .singles-wrapper{
      display:flex;
      justify-content:space-between;
      width:332px;
      height:85px;
      border-radius:10px;
      padding:11px;
      background-color:#525252;
      cursor:pointer;

        .singles-left{
          width:80px;
          height:80px;
          border-radius:8px;
          background-color:#d0d0d0;
        }
    }
  }

  .page04 {
    width: 100%;
    height: auto;
    border: 5px solid #000;
    border-radius: 30px;

    .page04-top {
      width: 100%;
      height: 310px;
      background-image: url(/assets/image/page04-top-bg-img.svg);
      background-repead: no-repead;
      display: flex;
      //   align-items:center;
      justify-content: space-between;
      position: relative;

      .page04-top-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #c4c4c4;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 64px;
        margin-left: 27px;
        margin-right: 27px;
      }

      .top-play-icon {
        position: absolute;
        bottom: -16px;
        right: 20px;
        color: #00ffe0;
        font-size: 60px;
        cursor: pointer;
      }
    }
  }

  .page04-main-wrapper {
    width: 100%;
    height: auto;
    background-color: #161616;
    border-bottom-right-radius:22px;
    border-bottom-left-radius:22px;

    .follow-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 48px 52px 39px 52px;
      color: #fff;
      text-align: center;

      .songs {
        font-size: 14px;
        line-height: 20px;
        color: #fff;

        .song-number {
          font-size: 24px;
          line-height: 28px;
          color: #fff;
          font-weight: bold;
        }
      }

      .followers {
        .follower-number {
          font-size: 24px;
          line-height: 28px;
          color: #fff;
          font-weight: bold;
        }
      }

      .following {
        .following-number {
          font-size: 24px;
          line-height: 28px;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }

  .popular {
    margin-left: 22px;
    .popular-heading {
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      margin-bottom: 16px;
    }
  }

  .popular-box {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: 15px solid #c4c4c4;
    background-color: #525252;
    margin-left: 70px;
    position: relative;

    .top-play-icon {
      position: absolute;
      right: -15px;
      bottom: -29px;
      font-size: 30px;
      color: #00ffe0;
    }
  }

  .album-name {
    color: #fff;
    text-align: center;
    margin-top: 12px;
  }
`;

export default Page04;
