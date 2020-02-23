// import React, { useState } from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { click_button } from '../reducers/test'

class Example extends Component {

  render() {
    return (
      <div>
        <p> You clicked {this.props.count} times </p>
        <button onClick={ this.props.click_button }>
          Click with dispatch
        </button>
        <button onClick={ this.props.click_button_async }>
          Click with async saga
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.test.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    click_button: () => {
      dispatch(click_button())
    },
    click_button_async: () => {
      dispatch({type: 'TEST_ASYNC'})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)
