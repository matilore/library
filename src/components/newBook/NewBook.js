import React, { Component } from 'react';

import styled from 'styled-components'

import { BooksList } from 'components'

class NewBook extends Component {

  newBook = (event) => {
    event.preventDefault()
    let newBook = {
      title: this.title.value,
      author: this.author.value,
      year: this.year.value,
      imageLink: this.imageLink.value || "https://edition-medali.tn/img/p/fr-default.jpg",
      genre: this.genre.value
    }
    this.props.saveNewBook(newBook);
    this.props.selectComponent(BooksList);

  }

  render() {
    console.log(this.props)
    return (
      <Wrapper>
        <Header>
          <h1>Add New Book</h1>
        </Header>
        <form onSubmit={this.newBook} className="form-group">
          <label htmlFor="">Title</label><br />
          <input type="text" ref={(input) => this.title = input} className="form-control" />
          <label htmlFor="">Author</label><br />
          <input type="text" ref={(input) => this.author = input} className="form-control" />
          <label htmlFor="">Year</label><br />
          <input type="text" ref={(input) => this.year = input} className="form-control" />
          <label htmlFor="">Cover</label><br />
          <input type="text" ref={(input) => this.imageLink = input} className="form-control" />
          <label htmlFor="">Genre</label><br />
          <select name='genre' ref={(input) => this.genre = input} className="form-control" id="">
            {
              this.props.genres.map((genre) => {
                return <option key={genre} value={genre}>{genre}</option>
              })
            }
          </select><br />
          <button type="submit" className="form-control">Add Book</button>
        </form>
      </Wrapper>

    );
  }
}

export default NewBook;


const Wrapper = styled.div`
`

const Header = styled.div`
  text-align: center;
`
