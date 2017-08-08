import React, { Component } from 'react'

import { BooksList } from 'components'
import PropTypes from 'prop-types'

import { Header } from './style'

class EditBook extends Component {
  constructor () {
    super()
    this.state = { bookToEdit: undefined }
  }

  componentDidMount () {
    let bookToEdit = this.props.books[this.props.index]
    this.setState({ bookToEdit })
  }

  fillInputValues = () => {
    if (this.state.bookToEdit !== undefined) {
      this.title.value = this.state.bookToEdit.title
      this.author.value = this.state.bookToEdit.author
      this.year.value = this.state.bookToEdit.year
      this.imageLink.value = this.state.bookToEdit.imageLink
      this.genre.value = this.state.bookToEdit.genre
    }
  }

  editBook = (event) => {
    event.preventDefault()
    let index = this.props.index
    let editedBook = {
      title: this.title.value,
      author: this.author.value,
      year: this.year.value,
      imageLink: this.imageLink.value || 'https://edition-medali.tn/img/p/fr-default.jpg',
      genre: this.genre.value
    }
    this.props.updateItem(editedBook, index, 'books')
    this.props.selectComponent(BooksList)
  }

  render () {
    this.fillInputValues()

    return (
      <div>
        <Header>
          <h1>Edit Book</h1>
        </Header>
        <form onSubmit={this.editBook} className="form-group">
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

export default EditBook

EditBook.propTypes = {
  books: PropTypes.array,
  genres: PropTypes.array,
  index: PropTypes.number,
  updateItem: PropTypes.func,
  selectComponent: PropTypes.func
}
