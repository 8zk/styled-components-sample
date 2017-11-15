import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <div>
          アバウト<br />
          <br />
          <Link to="/">ホーム</Link><br />
          <br />
          <Link to="/news">ニュース</Link><br />
          <br />
          <Link to="/counter">カウンター</Link>
        </div>
      </div>
    )
  }
}

export default About
