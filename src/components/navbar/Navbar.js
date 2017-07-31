import React, { Component } from 'react';
import styled from 'styled-components'

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <img src='images/logo.png' style={{height: '70%', margin: '20px'}} />
        <ButtonsWrapper>
          <Button onClick={()=> console.log('hello')}>Book List</Button>
          <Button>Category List</Button>
          <Button>Create Book</Button>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted black;
`
const Button = styled.button`
  background: transparent;
  padding: 3%;
  border-radius: 3em;
  border: 1px solid;
  outline: none;
  &:hover {
    background-color: rgb(66, 198, 146);
    color: white;
  }
`

const ButtonsWrapper = styled.div`
display: flex;
flex-basis: 40%;
justify-content: space-around;
align-items: center;
margin-right: 5%;
`