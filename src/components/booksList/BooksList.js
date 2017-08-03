import React, { Component } from 'react';
import styled from 'styled-components';


import _ from 'lodash';


class BooksList extends Component {


  render() {
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
                  <Icon onClick={this.props.removeBook.bind(null, index)} className="fa fa-times fa-2x" aria-hidden="true"></Icon>
                </IconWrapper>
                <h4>{book.title}</h4>
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
    );
  }
}

export default BooksList;

const imageStyle = {
  width: "100%",
  objectFit: 'cover',
  objectPosition: '50% 50%',
  height: '100%'
}

const Header = styled.div`
  text-align: center;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImageWrapper = styled.div`
padding: 8%;
box-sizing: border-box;
height: 100%;
min-height: 200px;  
width: 100%;
overflow: hidden;
`
const Book = styled.div`
width: 15%;
display: flex;
flex-direction: column;
align-items: center;
margin: 1.5%;
border: 1px solid black;
font-size: 0.8em;
`

const IconWrapper = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`

const Icon = styled.i`
  margin: 1px 5px;
  color: rgb(66, 198, 146);
`