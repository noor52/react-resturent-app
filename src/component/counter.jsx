import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.value
  }

  handleElncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }
  render () {
    console.log('props', this.props)
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()} </span>
        <button
          onClick={() => this.handleElncrement()}
          className='btn  btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    )
  }
  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formateCount () {
    const { value } = this.state
    return value === 0 ? 'zero' : valuecd try ''
  }
}

export default Counter
