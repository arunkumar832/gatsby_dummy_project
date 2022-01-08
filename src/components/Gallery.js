import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from 'react-icons/im'

const Gallery = ({heading}) => {
    const data = useStaticQuery(graphql`
    query GalleryQuery {
        allGalleryJson {
          edges {
            node {
              alt
              button
              button_url
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)
    function getGallery(data){
        const galleryArray = []
        data.allGalleryJson.edges.forEach((item, index) => {
            galleryArray.push(
                <ProductCard key={index}>
                    <ProductImg
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid} />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation/>
                            <ProductTitle>
                                {item.node.name}
                            </ProductTitle>
                        </TextWrap>
                        <Button to={item.node.button_url} primary="true" round="true"
                        css={`position: absolute; top: 420px; font-size: 14px;`}>
                            {item.node.button}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        });
        return galleryArray
    }
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>{getGallery(data)}</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Gallery

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    background: beige;
    color: #fff;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`
const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding; 0 2rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }
`
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    broder-radius: 10px;
    transition: 0.2s ease;
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    aligh-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`
const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`