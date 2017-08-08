import React, {Component} from 'react'

export default (InnerComponent, index) => class extends Component {
  render () {
    return <InnerComponent {...this.props} index={index} />
  }
}
