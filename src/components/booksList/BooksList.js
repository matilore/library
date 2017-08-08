import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {imageStyle, Header, Wrapper, ImageWrapper, Book, Title, IconWrapper, Icon} from './style'

class BooksList extends Component {
  render () {
    return (
      <div>
        <Header>
          <h1>Book List</h1>
        </Header>
        <Wrapper>
          {this.props.books.map((book, index) => {
            return (
              <Book key={index}>
                <IconWrapper>
                  <Icon onClick={this.props.removeItem.bind(null, index, 'books')} className="fa fa-times fa-2x" aria-hidden="true"></Icon>
                </IconWrapper>
                <Title>{book.title}</Title>
                <ImageWrapper key={index}>
                  <img src={book.imageLink} style={imageStyle} key={index} />
                </ImageWrapper>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
                <IconWrapper>
                  <Icon onClick={this.props.editBook.bind(null, index)} className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></Icon>
                </IconWrapper>
              </Book>
            )
          })}
        </Wrapper>
      </div>
    )
  }
}

export default BooksList

BooksList.propTypes = {
  books: PropTypes.array,
  editBook: PropTypes.func,
  removeItem: PropTypes.func
}
