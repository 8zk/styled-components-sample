import React from 'react'
import {
  Counter,
  Home,
  News,
  About,
 } from 'containers'
import { Header } from 'components'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import { name as repositoryName } from '../../package.json'

const isProduction = process.env.NODE_ENV === 'production'
const basename = isProduction ? `/${repositoryName}` : ''
const Container = styled.div`
  text-align: center;
`

function Routes() {
  return (
    <BrowserRouter basename={basename}>
      <Container>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/news" component={News} exact />
        <Route path="/about" component={About} exact />
        <Route path="/counter" component={Counter} exact />
      </Container>
    </BrowserRouter>
  )
}

export default Routes
