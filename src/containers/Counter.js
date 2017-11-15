import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Counter } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'actions/counter'

class CounterContainer extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  incrementIfOdd = () => {
    this.props.incrementIfOdd()
  }

  render() {
    return (
      <div>
        カウンター<br />
        <br />
        <Link to="/">ホーム</Link><br />
        <br />
        <Link to="/news">ニュース</Link><br />
        <br />
        <Link to="/about">アバウト</Link>
        <Counter
          counter={this.props.counter}
          increment={this.increment}
          decrement={this.decrement}
          incrementIfOdd={this.incrementIfOdd}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  counter: createSelector(
    (state) => state.counter,
    (counterState) => counterState
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
