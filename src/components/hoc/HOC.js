import React, {Component} from 'react'

export const HOC = (InnerComponent, index) => class extends Component {
  render () {
    return <InnerComponent {...this.props} index={index} />
  }
}
