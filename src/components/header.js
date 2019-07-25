import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../assets/svg/hamburger.inline.svg'

const H1 = styled.h1`
  color: #003C48;
  text-align: center;
  margin: 1em 0 0;
  line-height: calc(1.5 + (2 - 1.5) * ((100vw - 300px)/(1900 - 300)));

  #small {
    font-size: calc(23px + (28 - 23) * ((100vw - 300px) / (1900 - 300)));
  }

  #large {
    font-size: calc(28px + (43 - 28) * ((100vw - 300px) / (1900 - 300)));
  }

  @media(min-width: 1024px) {
    margin: 1em 0 2em;
  }
`

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflowX: hidden;
`
const wrapper = 'lg:w-1/2';

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media(max-width: 1024px) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 40vw; height: 100vh;
    padding: 1rem;
    padding-top: 4rem;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
    z-index: 10;
  }
`

const HamButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 0.75em;
  color: #003C48;
  background-color: white;
  border: 2px solid #003C48;
  position: relative;
  top: 20px; left: 20px;
`

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <div className="z-50 lg:hidden">
      <HamButton onClick={toggle}>
        <Hamburger className="fill-current h-3 w-3" />
      </HamButton>
    </div>
  )
}

const Header = () => {
  const [open, setOpen] = useState(false);

  return(
    <nav className="w-full z-50">
      <H1><span id="small">united</span><br /><span id="large">pool service</span></H1>
      <Wrapper className={wrapper}>
        <Links open={open}>
            <Link activeClassName="active" to='/'>Home</Link>
            <Link activeClassName="active" to='/contact/'>Contact</Link>
        </Links>
        <HamburgerButton toggle={setOpen} state={open} />
      </Wrapper>
    </nav>
  )
}

export default Header
