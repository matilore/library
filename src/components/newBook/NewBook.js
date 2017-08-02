import React, { Component } from 'react';

import styled from 'styled-components'

class NewBook extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <h1>Add New Book</h1>
        </Header>
        <div className="form-group">
          <label htmlFor="">Title</label><br />
          <input type="text" className="form-control" />
          <label htmlFor="">Author</label><br />
          <input type="text" className="form-control" />
          <label htmlFor="">Year</label><br />
          <input type="text" className="form-control" />
          <label htmlFor="">Pages</label><br />
          <input type="text" className="form-control" />
          <label htmlFor="">Genre</label><br />
          <select name="" className="form-control" id="">
            <option value="">Horror</option>
            <option value="">Short Story</option>
          </select><br />
          <button className="form-control">Add Book</button>
        </div>
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
