import React from 'react'

const MoreButton = ({nextFour}) => {
    return <button onClick={nextFour}>
            More sushi!
          </button>
}

export default MoreButton
//7. this component just recieves that call back function 
// we have a onClick event listener that triggers that function
//that button has a message that says More sushi!
