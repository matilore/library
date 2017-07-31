import React, { Component } from 'react';
import styled from 'styled-components'

import books from 'books.json';

class BooksList extends Component {


  render() {
    console.log(books)
    return (
      <Wrapper>
         {books.map((book, index)=>{
          return <Book key={index}><img src={book.imageLink} style={{width: "100%", objectFit: 'cover',objectPosition: '50% 50%', height: '100%'}} key={index} /></Book>
        })}
      </Wrapper>
    );
  }
}

export default BooksList;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Book = styled.div`
width: 32%;
padding: 8%;
box-sizing: border-box;
`