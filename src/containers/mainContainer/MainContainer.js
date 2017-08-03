import React from 'react'
import styled from 'styled-components'

import { BooksContainer } from 'containers'
import { Navbar, BooksList, NewBook, NewGenre, EditBook } from 'components' 


//virtual source of data
import books from 'books.json';
import genres from 'genres'

const HOC = (InnerComponent, index, nextPath)=> class extends React.Component {
  render(){
    return <InnerComponent {...this.props} index={index}/>
  }
}


class MainContainer extends React.Component {

  constructor(){
    super();
    this.state = {currentComponent: BooksList, books: books, genres: genres}
  }

  removeBook = (indexToRemove )=> {
    let booksListUpdated = this.state.books.filter((books, index)=>{
      return index != indexToRemove;
    })
    this.setState({books: booksListUpdated})
  }
  
  removeGenre = (indexToRemove) => {
    let genresListUpdated = this.state.genres.filter((genre, index)=>{
      return index != indexToRemove;
    })
    this.setState({genres: genresListUpdated})
  }

  saveNewBook = (newBook) => {
    let booksList = this.state.books;
    booksList.push(newBook);
    this.setState({books: booksList});
  }

  saveEditedBook = (editedBook, index) => {
    let booksList = this.state.books;
    booksList[index] = editedBook;
    this.setState({books: booksList});
  }

  updateGenre = (index, genreValue, event) => {
    let genres = this.state.genres;
    genres[index] = genreValue;
    this.setState({genres: genres})
  }

  editBook = (index) => {
    let component = HOC(EditBook, index);
    this.setState({currentComponent: component });
  }


  selectComponent = (component)=> {
    this.setState({currentComponent: component});
    
  }


  render () {
    return (
      <div>
          <Navbar selectComponent={this.selectComponent}/>
          <Wrapper>
             <this.state.currentComponent {...this.state} removeBook={this.removeBook} removeGenre={this.removeGenre} saveNewBook={this.saveNewBook} saveEditedBook={this.saveEditedBook} editBook={this.editBook} updateGenre={this.updateGenre} selectComponent={this.selectComponent}/> 
          </Wrapper>
      </div>
    )
  }
}

export default MainContainer


const Wrapper = styled.div`
  height: 85vh;
`





