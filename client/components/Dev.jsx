import React from 'react'

// Note how props.remove is actually the removeDev function. We need to call it as a function in the onClick event. then we pass to it props.name, then removeDev runs the filter on the developers array to drop name from the array.

const Dev = (props) => {
  return (
    <div className='dev'>
        return (
          <div
            className='dev'
            onclick={() => props.remove(props.name)}>
              Name: {props.name}
          </div>
        )
      }

      )}
    </div>

  )
}

export default Dev
