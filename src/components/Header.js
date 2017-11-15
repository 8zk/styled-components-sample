import React from 'react'
import logo from 'assets/logo.svg'
import styled, { css, keyframes } from 'styled-components'
import variables from 'styles/variables'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const TopBar = styled.div`
  background-color: #222;
  padding: 20px;
  color: #fff;

  .test {
    margin-top: 10px;
  }
`
const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`
const HeaderDesc = styled.h2`
  font-size: ${variables.medium}px;
  ${props => css`
		color: ${(() => {
      switch (props.theme) {
        case 'blue':
          return 'indigo';
        case 'red':
          return 'tomato';
        default:
          return 'white';
      }
    })()};
	`}
`

function Header() {
  return (
    <TopBar>
      <Logo />
      <HeaderDesc theme="test">Welcome to Create Redux App</HeaderDesc>
      <div className="test">className test</div>
    </TopBar>
  )
}

export default Header
