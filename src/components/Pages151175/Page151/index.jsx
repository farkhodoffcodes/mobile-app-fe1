import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
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
        </div>
    </Container>
    
  )
}
const Container = styled.div`

`

export default index


