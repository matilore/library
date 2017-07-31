import React from 'react'

import {Navbar, BooksList} from 'components'

class MainContainer extends React.Component {




  render () {

    // let component = this.steps[this.props.counter.value]
    // return (
    //   <div>
    //     {React.createElement(component)}
    //     { component != Landing ? < Footer /> : null }
    // </div>
    // )


    return (
      <div>
          <Navbar />
          <BooksList />
      </div>
    )
  }
}

export default MainContainer
