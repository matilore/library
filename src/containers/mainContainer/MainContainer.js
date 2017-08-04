import React, { Component } from 'react'
import styled from 'styled-components'

import { Navbar, BooksList, EditBook, HOC } from 'components'

// virtual source of data
import books from 'data/books.json'
import genres from 'data/genres'

class MainContainer extends Component {
  constructor () {
    super()
    this.state = { currentComponent: BooksList, books: books, genres: genres }
  }

  removeItem = (indexToRemove, itemKind) => {
    let listUpdated = this.state[itemKind].filter((item, index) => {
      return index != indexToRemove
    })
    this.setState({ [itemKind]: listUpdated })
  }

  saveNewItem = (newBook, itemKind) => {
    let list = this.state[itemKind]
    list.push(newBook)
    this.setState({ [itemKind]: list })
  }

  updateItem = (updatedValue, index, itemKind) => {
    let list = this.state[itemKind]
    list[index] = updatedValue
    this.setState({ [itemKind]: list })
  }

  editBook = (index) => {
    let component = HOC(EditBook, index)
    this.setState({ currentComponent: component })
  }

  selectComponent = (component) => {
    this.setState({ currentComponent: component })
  }

  render () {
    return (
      <div>
        <Navbar selectComponent={this.selectComponent} />
        <div>
          <this.state.currentComponent {...this.state}
            removeItem={this.removeItem}
            saveNewItem={this.saveNewItem}
            updateItem={this.updateItem}
            editBook={this.editBook}
            selectComponent={this.selectComponent} />
        </div>
      </div>
    )
  }
}

export default MainContainer
