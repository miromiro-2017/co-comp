import React from 'react'

import Dev from './Dev'

// 'remove' below serves to pass removeDev received from App.jsx down again to Dev.

const Devs = (props) => {
  return (
    <div className='devs'>
      {props.names.map(name => {
        return (
          <Dev
            key={name}
            name={name}
            remove={props.remove} />
        )
      })}
    </div>

  )
}

export default Devs
