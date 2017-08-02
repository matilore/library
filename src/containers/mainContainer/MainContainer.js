import React from 'react'
import styled from 'styled-components'

import { BooksContainer } from 'containers'
import { Navbar, BooksList, NewBook } from 'components' 


class MainContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentComponent: BooksList}
  }

  selectComponent = (component)=> {
    this.setState({currentComponent: component});
  }


  render () {
    
    return (
      <div>
          <Navbar selectComponent={this.selectComponent}/>
          <Wrapper>
             <this.state.currentComponent /> 
             {/* {React.createElement(this.state.currentComponent)}  */}

          </Wrapper>
      </div>
    )
  }
}

export default MainContainer


const Wrapper = styled.div`
  height: 85vh;
`