import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'



const Index = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () =>{
        setIsVisible(!isVisible);
    };

  return (
    <>
    <Container>
        <div className='page-bg'>
            <header>
                <button>
                    <img src="../assets/image/arrow-back.svg" alt="back" /> 
                </button>
                <button>
                    <img src="../assets/image/share.svg" alt="share" />
                </button>
            </header>
            <hr />
            <main>
                <div className='drop-menu'>
                    <p>Duration</p>
                    <button ><img src="../assets/image/arrow_down.svg" alt="arrow" />
                    </button>   
                </div>
                <div className='drop-menu'>
                    <p>Studio</p>
                    <button><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                <div className='drop-menu'>
                    <p>Class level</p>
                    <button onClick={toggleVisibility} className='show-list'><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                {isVisible && <div className='levels'>
                        <button>Entry level</button>
                        <button>Beginner</button>
                        <button>Intermediate</button>
                        <button>Advanced</button>
                        <button>All levels</button>
                    </div>}
                <div className='drop-menu'>
                    <p>Class type</p>
                    <button><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                <div className='drop-menu'>
                    <p>Target area</p>
                    <button><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                <div className='drop-menu'>
                    <p>Target body part</p>
                    <button><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                <div className='drop-menu'>
                    <p>Equipment</p>
                    <button><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                <div className='drop-menu'>
                    <p>Music</p>
                    <button><img src="../assets/image/arrow_down.svg" alt="arrow" /></button>
                </div>
                
                <Link to='/page152'>
                <button className='bottom-btn'>Show all results</button>
                </Link>
            </main>
        </div>
    </Container>
    </>
     
  )
}

const Container = styled.div`
    background-color: #000;
    border-radius: 30px;
    font-weight: 400;
    font-family: "Ibarra Real Nova", serif;
    font-size: 18px;

    button{
        cursor: pointer;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    button{
        background-color: transparent;
        border: none;

    }
    main{
        .drop-menu{
            display: flex;
            justify-content: space-between;
            height: 40px;
            padding: 18px;
            border-bottom: 1px solid #525252;
            p{
                color: #fff;
            }
        }
        .levels{
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            gap: 20px;
            button{
                width: 87px;
                height: 30px;
                border: 1px solid #fff;
                border-radius: 60px;
                color: #fff;

            }
        }
        .bottom-btn{
            color: #fff;
            width: 357px;
            height: 44px;
            margin: 20px;
            background-color: #3A595D;
            border-radius: 60px;
        }
    }
`

export default Index


