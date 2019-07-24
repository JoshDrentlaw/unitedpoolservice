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

const Row = styled.div`
  display: flex;
  width: 100%; height: 460px;
`

const UL = styled.ul`
  color: white;
  margin: auto auto;
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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service2: file(relativePath: {eq: "images/service2.webp"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service3: file(relativePath: {eq: "images/service3.webp"}) {
        childImageSharp {
          fluid {
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
        <Row>
          <BackgroundImage
            fluid={data.service1.childImageSharp.fluid}
            alt="Ground level shot of a pool and patio with fireplace."
            wi
          >
            <UL>
              <li>weekly service</li>
              <li>weekly service</li>
              <li>weekly service</li>
              <li>weekly service</li>
            </UL>
          </BackgroundImage>
          <BackgroundImage
            fluid={data.service2.childImageSharp.fluid}
            alt="Top view of ool water and a beach ball."
          >
            <UL>
              <li>weekly service</li>
              <li>weekly service</li>
              <li>weekly service</li>
              <li>weekly service</li>
            </UL>
          </BackgroundImage>
          <BackgroundImage
            fluid={data.service3.childImageSharp.fluid}
            alt="Top view of pool stairs underwater."
          >
            <UL>
              <li>weekly service</li>
              <li>weekly service</li>
              <li>weekly service</li>
              <li>weekly service</li>
            </UL>
          </BackgroundImage>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
