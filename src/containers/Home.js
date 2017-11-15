import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        ホーム<br />
        <br />
        <Link to="/news">ニュース</Link><br />
        <br />
        <Link to="/about">アバウト</Link><br />
        <br />
        <Link to="/counter">カウンター</Link>
      </div>
    )
  }
}
