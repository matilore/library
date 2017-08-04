import React, { Component } from 'react'

import { Icon } from './style'

class DynamicElement extends Component {
  constructor (props) {
    super(props)
    this.state = { edit: false, value: props.genre }
  }

  onEdit = () => {
    this.setState({ edit: true })
  }

  offEdit = () => {
    this.setState({ edit: false })
  }

  saveUpdate = () => {
    this.props.updateItem(this.state.value, this.props.index, 'genres')
    this.offEdit()
  }

  renderButton = () => {
    return (
      <button type="button" className="list-group-item">
        {this.props.genre}
        <Icon onClick={this.props.removeItem.bind(null, this.props.index, 'genres')} className="fa fa-times" aria-hidden="true"></Icon>
        <Icon onClick={this.onEdit} className="fa fa-pencil-square-o" aria-hidden="true"></Icon>
      </button>
    )
  }

  renderInput = () => {
    return (
      <div>
        <input onChange={(event) => { this.setState({ value: event.target.value }) }} type="text" autoFocus defaultValue={this.props.genre} className="form-control" id="genreToEdit" />
        <button onClick={this.saveUpdate} id="saveGenreToEdit" className="form-control"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
        <button onClick={this.offEdit} id="saveGenreToEdit" className="form-control"><i className="fa fa-undo" aria-hidden="true"></i></button>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.state.edit == false ? this.renderButton() : this.renderInput()}

      </div>

    )
  }
}

export default DynamicElement
