import React, { Component } from 'react'

import { DynamicElement } from 'components'
import { Icon, NewGenreWrapper } from './style'

class GenreList extends Component {
  constructor () {
    super()
    this.state = { addNew: false }
  }

  enableNew = () => {
    this.setState({ addNew: true })
  }

  disableNew = () => {
    this.setState({ addNew: false })
  }

  newGenre = (event) => {
    event.preventDefault()
    let newGenre = this.newGenre.value
    this.props.saveNewItem(newGenre, 'genres')
    this.disableNew()
  }

  render () {
    return (
      <div className="list-group">
        {this.props.genres.map((genre, index) => {
          return <DynamicElement key={index} genre={genre} index={index} removeItem={this.props.removeItem} updateItem={this.props.updateItem} />
        })}
        <NewGenreWrapper>
          {this.state.addNew === false
            ? (
              <button className="form-control" onClick={this.enableNew}>Add New</button>
            ) : (
              <div>
                <h2>Add a new genre</h2>
                <input autoFocus className="form-control" ref={(input) => this.newGenre = input} />
                <button onClick={this.newGenre} className="form-control">Add</button>
              </div>
            )}
        </NewGenreWrapper>
      </div>

    )
  }
}

export default GenreList
