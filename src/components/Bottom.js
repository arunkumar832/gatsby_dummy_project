import React from 'react'
import styled from 'styled-components'

const Bottom = () => {
    return (
        <ProductsContainer>
            <ProductsHeading>Bottom Heading</ProductsHeading>
            <ProductsWrapper>Bottom Wrapper</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Bottom

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem cacl((100vm - 1300px)/2);
    background: orange;
    color: #fff;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`
const ProductsWrapper = styled.div``
