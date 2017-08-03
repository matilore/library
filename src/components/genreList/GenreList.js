import React, { Component } from 'react';

import styled from 'styled-components'


class GenreList extends Component {

  constructor() {
    super()
    this.state = { addNew: false }
  }

  enableNew = () => {
    this.setState({ addNew: true })
  }

  disableNew = () => {
    this.setState({ addNew: false })
  }

  newGenre = (event) => {
    event.preventDefault()
    let newGenre = this.newGenre.value
    this.props.saveNewGenre(newGenre);
    this.disableNew();

  }

  render() {

    return (
      <div className="list-group">
        {this.props.genres.map((genre, index) => {
          return <DynamicVal key={index} genre={genre} index={index} removeGenre={this.props.removeGenre} updateGenre={this.props.updateGenre} />
        })}
        <NewGenreWrapper>
          {this.state.addNew === false ?
            (
              <button className="form-control" onClick={this.enableNew}>Add New</button>
            ) : (
              <div>
                <h2>Add a new genre</h2>
                <input className="form-control" ref={(input)=> this.newGenre = input} />
                <button onClick={this.newGenre} className="form-control">Add</button>
              </div>
            )}
        </NewGenreWrapper>
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

const NewGenreWrapper = styled.div`
  text-align: center;
  width: 60%;
  margin: 10% auto;
`


class DynamicVal extends Component {

  constructor(props) {
    super(props);
    this.state = { edit: false, value: props.genre };
  }

  onEdit = () => {
    this.setState({ edit: true });
  }

  offEdit = () => {
    this.setState({ edit: false });
  }


  saveUpdate = () => {
    this.props.updateGenre(this.props.index, this.state.value);
    this.offEdit();
  }

  renderButton = () => {
    return (
      <button type="button" className="list-group-item">
        {this.props.genre}
        <Icon onClick={this.props.removeGenre.bind(null, this.props.index)} className="fa fa-times" aria-hidden="true"></Icon>
        <Icon onClick={this.onEdit} className="fa fa-pencil-square-o" aria-hidden="true"></Icon>
      </button>
    );
  }

  renderInput = () => {
    return (
      <div>
        <input onChange={(event) => { this.setState({ value: event.target.value }) }} type="text" autoFocus defaultValue={this.props.genre} className="form-control" id="genreToEdit" />
        <button onClick={this.saveUpdate} id="saveGenreToEdit" className="form-control"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
        <button onClick={this.offEdit} id="saveGenreToEdit" className="form-control"><i className="fa fa-undo" aria-hidden="true"></i></button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.edit == false ? this.renderButton() : this.renderInput()}

      </div>

    )
  }
}


