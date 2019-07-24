import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../assets/svg/hamburger.inline.svg'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1em;
`
const wrapper = 'lg:w-1/2';

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`
  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    width: 40vw; height: 100vh;
    padding: 1rem;
    padding-top: 4rem;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
  }
`

const hamburger = "flex items-center px-3 py-2 text-black bg-white rounded border border-black";

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <div className="block ml-auto z-50 lg:hidden" style={{ gridArea: 'links' }}>
      <button className={hamburger} onClick={toggle}>
        <Hamburger className="fill-current h-3 w-3" />
      </button>
    </div>
  )
}

const links =
  `text-white lg:text-black flex flex-col justify-start items-start bg-transblack z-10
  lg:bg-transparent lg:flex-row lg:justify-between lg:items-center lg:visible`;

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return(
    <nav className="fixed lg:relative w-full z-50">
      <Wrapper className={wrapper}>
        <span className="text-red-600 font-sans md:text-base text-lg whitespace-no-wrap hidden lg:inline">Company Logo</span>
        <Links open={open} className={links}>
          <div className="">
            <Link className="block lg:inline lg:pr-2 lg:border-none border-b-2 border-white" activeClassName="active" to='/'>Home</Link>
            <Link className="block lg:inline lg:pl-2" activeClassName="active" to='/contact/'>Contact</Link>
          </div>
        </Links>
        <HamburgerButton toggle={setOpen} state={open} />
      </Wrapper>
    </nav>
  )
}

export default Header
