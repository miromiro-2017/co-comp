import React from 'react'

import Home from './Home'
import NotHome from './NotHome'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHomeVisible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      isHomeVisible: !this.state.isHomeVisible
    })
  }

  render () {
    return (
      <div>
        <h1>React development has begun!</h1>
        <button onClick={this.handleClick}>Toggle</button>
        {
          this.state.isHomeVisible
            ? <Home />
            : <NotHome />
        }
        {/*
          this.state.isHomeVisible && <Home />
        */}
      </div>
    )
  }
}

export default App
