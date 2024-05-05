import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Page05 = () => {
  return (
    <div>
      <Page5>
        <section className="page05">
          <div className="page05-container">
            <div className="page05-top">
              <i class="fa-solid fa-chevron-left"></i>
              <h2 className="page05-top-heading">Therapist</h2>
              <i class="fa-solid fa-filter"></i>
            </div>

            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <img className="slider-img" src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img className="slider-img" src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg" alt="Image 2" />
              </SplideSlide>  
            </Splide>

            <div className="page05-main">
              <div className="page05-main-top">
                <h3 className="page05-main-top-heading1">Nearby Therapists</h3>
                <h3 className="page05-main-top-heading2">See more</h3>
              </div>
              <ol className="page05-main-list">
                <li className="page05-main-list-item">
                  <div className="page05-main-item-left"></div>
                  <div className="page05-main-item-right">
                    <h3 className="page05-main-item-right-heading">Dr. John Doe</h3>
                    <p className="page05-main-item-right-desc">CUHK Medical Centre</p>
                    <span className="page05-main-item-right-view">
                      <span className="star-wrapper">
                        <i class="fa-solid fa-star"></i>
                        4.8
                      </span>
                      <span className="reviews">(156 reviews)</span>
                    </span>
                  </div>
                </li>

                <li className="page05-main-list-item">
                  <div className="page05-main-item-left"></div>
                  <div className="page05-main-item-right">
                    <h3 className="page05-main-item-right-heading">Dr. John Doe</h3>
                    <p className="page05-main-item-right-desc">CUHK Medical Centre</p>
                    <span className="page05-main-item-right-view">
                      <span className="star-wrapper">
                        <i class="fa-solid fa-star"></i>
                        4.8
                      </span>
                      <span className="reviews">(156 reviews)</span>
                    </span>
                  </div>
                </li>

                <li className="page05-main-list-item">
                  <div className="page05-main-item-left"></div>
                  <div className="page05-main-item-right">
                    <h3 className="page05-main-item-right-heading">Dr. John Doe</h3>
                    <p className="page05-main-item-right-desc">CUHK Medical Centre</p>
                    <span className="page05-main-item-right-view">
                      <span className="star-wrapper">
                        <i class="fa-solid fa-star"></i>
                        4.8
                      </span>
                      <span className="reviews">(156 reviews)</span>
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </Page5>
    </div>
  );
};

const Page5 = styled.div`
  .page05 {
    width: 100%;
    height: auto;
    border: 5px solid #000;
    border-radius: 30px;
    padding-top: 37px;
    padding-bottom: 32px;
    .page05-container {
      width: 343px;
      margin: 0 auto;
    }
  }

  .page05-top{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;

      .page05-heading{
        font-size:16px;
        line-height:20px;
        color:#000;
      }
  }

  .slider-img{
    width:248px;
    height:170px;
    border-radius:16px;
    background-color:#ababab;
  }

  .page05-main{
    .page05-main-top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-bottom:31px;
        .page05-main-top-heading1{
          font-size:16px;
          line-height:20px;
        }

        .page05-main-top-heading2{
          font-size:14px;
          line-height:18px;
          cursor:pointer;
        }
    }
  }

  .page05-main-list{
    padding:0px;
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:22px;
    .page05-main-list-item{
      display:flex;
      align-items:center;
      gap:15px;

        .page05-main-item-left{
          width:125px;
          height:125px;
          border-radius:8px;
          background-color:#d0d0d0;
        }

        .page05-main-item-right-heading{
          font-size:16px;
          line-height:20px;
          color:#000;
        }

        .page05-main-item-right-desc{
          font-size:14px;
          line-height:18px;
          color:#000;
          margin-bottom:8px;
          margin-top:8px;
        }

        .page05-main-item-right-view{
          display:flex;
          align-items:center;
          gap:16px;

            .star-wrapper{
              display:flex;
              align-items:center;
              gap:2px;
            }

            .reviews{
              font-size:14px;
              line-height:18px;
              color:#000;
              font-weight:bold;
            }
        }
    }
  }
`;

export default Page05;