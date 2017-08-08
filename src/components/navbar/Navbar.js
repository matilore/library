import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BooksList, NewBook, GenreList } from 'components'

import { Wrapper, Button, ButtonsWrapper } from './style'

class Navbar extends Component {
  render () {
    return (
      <Wrapper>
        <img src='images/logo.png' style={{height: '70%', margin: '20px'}} />
        <ButtonsWrapper>
          <Button onClick={this.props.selectComponent.bind(null, BooksList)}>Book List</Button>
          <Button onClick={this.props.selectComponent.bind(null, GenreList)}>Category List</Button>
          <Button onClick={this.props.selectComponent.bind(null, NewBook)}>Add Book</Button>
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}

export default Navbar

Navbar.propTypes = {
  selectComponent: PropTypes.func
}
