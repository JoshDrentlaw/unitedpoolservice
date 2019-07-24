import React from "react"
import PropTypes from "prop-types"

import '../global.css'
import styled from 'styled-components'

import Header from "./header"

import Instagram from '../assets/svg/instagram.inline.svg'
import Facebook from '../assets/svg/facebook.inline.svg'


const Background = styled.div`

`

const Main = styled.main`
  position: relative;
  max-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;
  scroll-behavior: touch;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  @media (min-width: 1024px) {
    min-height: calc(100vh - 112px);
    overflow: visible;
    width: 50%;
  }
`

export const Container = styled.section`
    align-items: center;
    display: flex;
    height: ${props => props.heightSm || 'auto'};
    flex-direction: ${props => props.flexDirSm || 'column'};
    justify-content: center;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    width: 100%;

    @media(min-width: 1024px) {
        flex-direction: ${props => props.flexDirLg || 'row'};
        height: ${props => props.heightLg || '40vh'};
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
  <footer className="w-full text-center p-4 bg-black text-lightgrey z-50 fixed bottom-0 lg:relative lg:bottom-auto">
    <div className="lg:w-1/2 mx-auto flex justify-between">
      <div className="text-sm w-1/2">© {new Date().getFullYear()} </div>
      <Socials />
    </div>
  </footer>
)

const Layout = ({ children }) => {

  return(
    <Background>
      <div className="relative">
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
