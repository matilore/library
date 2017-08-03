import React, { Component } from 'react';

import styled from 'styled-components'

import { BooksList } from 'components';


class EditBook extends React.Component {

  constructor() {
    super()
    this.state = { bookToEdit: undefined }
  }

  componentDidMount() {
    let bookToEdit = this.props.books[this.props.index];
    this.setState({ bookToEdit })
  }

  fillInputValues = () => {
     if (this.state.bookToEdit != undefined) {
      this.title.value = this.state.bookToEdit.title
      this.author.value = this.state.bookToEdit.author
      this.year.value = this.state.bookToEdit.year
      this.imageLink.value = this.state.bookToEdit.imageLink
      this.genre.value = this.state.bookToEdit.genre
    }
  }


  //INCLUDED METHOD IN THE COMPONENT BECAUSE EXTENDED
  editBook = (event) => {
    event.preventDefault();

    let index = this.props.index;

    let editedBook = {
      title: this.title.value,
      author: this.author.value,
      year: this.year.value,
      imageLink: this.imageLink.value || "https://edition-medali.tn/img/p/fr-default.jpg",
      genre: this.genre.value
    }
    this.props.saveEditedBook(editedBook, index);
    this.props.selectComponent(BooksList)
  }








  render() {
   
    this.fillInputValues();

    return (
      <Wrapper>
        <Header>
          <h1>Edit Book</h1>
        </Header>
        <form onSubmit={this.editBook} className="form-group">
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

export default EditBook;


const Wrapper = styled.div`
`

const Header = styled.div`
  text-align: center;
`
