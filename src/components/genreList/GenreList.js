import React, { Component } from 'react';

import styled from 'styled-components'


class GenreList extends Component {

  constructor(){
    super();
    this.state = {edit: false};
  }

  onEdit = () => {
    this.setState({edit: true});
  }

  render() {
    
    return (
      <div className="list-group">
        {this.props.genres.map((genre, index) => {
          return <button key={genre} type="button" className="list-group-item">
            {genre}
            <Icon onClick={this.props.removeGenre.bind(null, index)} className="fa fa-times fa-2x" aria-hidden="true"></Icon>
            <Icon  className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></Icon>
          </button>
        })}
      </div>
    );
  }
}

export default GenreList;


const Icon = styled.i`
  margin: 1px 5px;
  color: rgb(66, 198, 146);
  float: right;
`
