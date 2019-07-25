import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

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

const Links = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 50;

  @media(min-width: 1024px) {
    width: 50%; height: auto;
    position: static;
  }
`

const Header = () => {

  return(
    <nav className="w-full z-50">
      <H1><span id="small">united</span><br /><span id="large">pool service</span></H1>
      <Links>
          <Link activeClassName="active" to='/'>Home</Link>
          <Link activeClassName="active" to='/contact/'>Contact</Link>
      </Links>
    </nav>
  )
}

export default Header
