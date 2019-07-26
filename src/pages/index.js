import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'

import Layout, { Container } from "../components/layout"
import SEO from "../components/seo"

const H2 = styled.h2`
  font-family: Cormorant Garamond;
  font-size: 20px;
  text-align: center;
  margin: 1em 0;
`

const VideoFrame = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  position: relative;
  
  iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; height: 675px;

  @media(min-width: 1024px) {
    flex-direction: row;
    width: 100%; height: 460px;
  }

  /* BackgroundImage */
  div {
    width: 100%; height: 100%;
    display: flex;
  }

  div:before {
    filter: brightness(0.6);
  }
`

const UL = styled.ul`
  color: white;
  font-size: 18px;
  line-height: 2.5;
  font-weight: 600;
  margin: auto auto;
  list-style: disc outside;
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoFrame>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoFrame>
)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      service1: file(relativePath: {eq: "images/service1.webp"}) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service2: file(relativePath: {eq: "images/service2.webp"}) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service3: file(relativePath: {eq: "images/service3.webp"}) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Container border="1px solid #c8c8c8">
        <H2>Family owned for over 30 years</H2>
        <Video videoSrcURL="https://player.vimeo.com/video/347850723" videoTitle="vimeo-player"></Video>
        <Wrapper>
          <BackgroundImage
            fluid={data.service1.childImageSharp.fluid}
            alt="Ground level shot of a pool and patio with fireplace."
          >
            <UL>
              <li>weekly service</li>
              <li>repairs</li>
              <li>automatic cleaners</li>
              <li>acid wash</li>
            </UL>
          </BackgroundImage>
          <BackgroundImage
            fluid={data.service2.childImageSharp.fluid}
            alt="Top view of ool water and a beach ball."
          >
            <UL>
              <li>riverside</li>
              <li>corona</li>
              <li>woodcreat</li>
              <li>mira loma</li>
            </UL>
          </BackgroundImage>
          <BackgroundImage
            fluid={data.service3.childImageSharp.fluid}
            alt="Top view of pool stairs underwater."
          >
            <UL>
              <li>pet friendly</li>
              <li>residential</li>
              <li>family owned</li>
              <li>free estimates</li>
            </UL>
          </BackgroundImage>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default IndexPage
