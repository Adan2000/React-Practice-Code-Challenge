import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, nextFour, eatSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi sushi={sushi} eatSushi={eatSushi}/>)
        }
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer

//3. we display what we got in the props on line 5, we got the sushis(state), the nextFour function, and the eatSushi function 
//we take in those 4 arrays of sushis. we map over them 
//we take in those arrays as "sushi" and pass them down to Sushi component
//we also pass in the eatSushi prop

//6. in our Container, for our <MoreButton />  we pass in the callback fucntion that was given to us by app as a prop