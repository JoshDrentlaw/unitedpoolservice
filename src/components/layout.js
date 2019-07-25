import React from "react"
import PropTypes from "prop-types"

import '../global.css'
import styled from 'styled-components'

import Header from "./header"

import Instagram from '../assets/svg/instagram.inline.svg'
import Facebook from '../assets/svg/facebook.inline.svg'


const Background = styled.div`
  font-family: Cinzel;
`

const Main = styled.main`
  min-height: calc(100vh - (191px + 1em));
  height: auto;
  position: relative;
  margin: 0 auto;
  scroll-behavior: touch;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  @media (min-width: 1024px) {
    overflow: visible;
    width: 50%;
  }
`

export const Container = styled.section`
    align-items: center;
    border: ${props => props.border || 'none'};
    display: flex;
    height: ${props => props.heightSm || 'auto'};
    flex-direction: ${props => props.flexDirSm || 'column'};
    justify-content: flex-start;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    width: 100%;

    @media(min-width: 1024px) {
        height: ${props => props.heightLg || 'auto'};
        justify-content: ${props => props.justifyLg || 'center'};
    }
`

export const Socials = () => (
  <div className="pl-px2 w-1/2">
    <a href="#" className="text-white mr-4 inline">
      <Instagram className="fill-current w-4 h-4 inline" />
    </a>
    <a href="#" className="text-white inline">
      <Facebook className="fill-current w-4 h-4 inline" />
    </a>
  </div>
)

const Footer = () => (
  <footer className="w-full lg:w-1/2 text-left p-4 pl-8 mx-auto bg-transparent text-grey z-50 bottom-0 lg:bottom-auto">
    <div className="text-sm w-full">© {new Date().getFullYear()} United Pool Service</div>
  </footer>
)

const Layout = ({ children }) => {

  return(
    <Background>
      <div className="relative overflow-x-hidden">
        <div id="top"></div>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
