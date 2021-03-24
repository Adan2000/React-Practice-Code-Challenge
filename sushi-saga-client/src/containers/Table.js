import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table

//11. we recieved in props (eatenSushi)
//we make a constant that takes in those props but we name in 'array' because it is an array but with eaten set to true 
//we take that array and map over it, meaning we do something with that array, which is whatever is in the () next to map
//so we 