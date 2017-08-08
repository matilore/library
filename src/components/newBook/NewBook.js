import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BooksList } from 'components'

import { Header } from './style'

class NewBook extends Component {
  newBook = (event) => {
    event.preventDefault()
    let newBook = {
      title: this.title.value,
      author: this.author.value,
      year: this.year.value,
      imageLink: this.imageLink.value || 'https://edition-medali.tn/img/p/fr-default.jpg',
      genre: this.genre.value
    }
    this.props.saveNewItem(newBook, 'books')
    this.props.selectComponent(BooksList)
  }

  render () {
    return (
      <div>
        <Header>
          <h1>Add New Book</h1>
        </Header>
        <form onSubmit={this.newBook} className="form-group">
          <label htmlFor="">Title</label><br />
          <input type="text" ref={(input) => { this.title = input }} id="bookField" className="form-control" />
          <label htmlFor="">Author</label><br />
          <input type="text" ref={(input) => { this.author = input }} id="bookField" className="form-control" />
          <label htmlFor="">Year</label><br />
          <input type="text" ref={(input) => { this.year = input }} id="bookField" className="form-control" />
          <label htmlFor="">Cover</label><br />
          <input type="text" ref={(input) => { this.imageLink = input }} id="bookField" className="form-control" />
          <label htmlFor="">Genre</label><br />
          <select name='genre' ref={(input) => { this.genre = input }} id="bookField" className="form-control">
            {
              this.props.genres.map((genre) => {
                return <option key={genre} value={genre}>{genre}</option>
              })
            }
          </select><br />
          <button type="submit" id="bookField" className="form-control">Add Book</button>
        </form>
      </div>

    )
  }
}

export default NewBook

NewBook.propTypes = {
  books: PropTypes.array,
  genres: PropTypes.array,
  saveNewItem: PropTypes.func,
  selectComponent: PropTypes.func
}
