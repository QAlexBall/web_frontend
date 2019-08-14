// import React, { useState } from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// export function Example(props) {
  // const [count, setCount] = useState(0);
//
  // return (
    // <div>
      // <p> You clicked {count} times </p>
      // <button onClick={() => setCount(count + 1)}>
        // Click me
      // </button>
      // <button onClick={ this.props.click_button.bind(this) }>
        // Click with dispatch
      // </button>
//
    // </div>
  // )
// }

export class Example extends Component {
  static propTypes = {
    count: PropTypes.any,
  }

  render() {
    return (
      <div>
        <p> You clicked {this.props.count} times </p>
        <button onClick={ this.props.click_button }>
          Click with dispatch
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    click_button: () => {
      console.log('mapDispatch')
      dispatch({ type: 'TEST' })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)
