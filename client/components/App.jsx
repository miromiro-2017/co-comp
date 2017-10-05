import React from 'react'

import Devs from './Devs'

const developers = 'Aaron Skye Don Joe Callan Rich Andrea Annah Daz Rajal'.split(' ')

// const App = () => {
//   return (
//     <Devs names={developers} />
//     // this is how we require our data object into App which is a functional component.
//     // if we need App to be stateful / class-based component, we can add the developers array into this.state.
//   )
// }

class App extends React.Component {
  // Class is like the blueprint for the component.
  // add a constructor(props) to assign initial this.state
  constructor (props) {
    super(props)
    // Calls the constructor inside React.Component, which initialises the react component.
    this.state = {developers: developers}
    // above is same as {developers} ie shorthand where key and value are the same.
    }
    // this.state always an object.
    this.removeDev = this.removeDev.bind(this)
    // binds removeDev to the class.
  }

  // functions are needed in the same jsx file that we have state in. The function is passed down to the component that triggers the event ie the component that has the button.

  removeDev (name) {
    const newArray = this.state.developers.filter(dev => dev !== name)
    this.setState({developers: newArray})
    // will filter developer array for every item that doesn't = name input, ie will remove name from the array.
    // setState will overwrite the developers object newArray on the virtual DOM.
    //
  }

  // in render, since we put the array in use into this.state, we need to modify previous developers array to find in this.state
  // 'remove' serves to pass the removeDev function down to the component where it's needed. Devs needs to also pass along down to Dev.

  render () {
    return (
      <div>
        <Devs
          names={this.state.developers}
          remove={this.removeDev} />
      </div>
    )
  }
}

export default App
