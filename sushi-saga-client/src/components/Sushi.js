import React, { Fragment } from 'react'

const Sushi = ({sushi, eatSushi}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(sushi)}>
        {sushi.eaten ? null : <img src={sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi

//5. up top on line 3 we again define what we recieced a sushi and a finction called eatSushi
//insde the div where have our plate, we a onClick event listener to that passes in a sushi back down 
// we then do a turnery where we say if sushi eaten is true then render null, otherwise render the sushi image,
//in the next div where we have our sushi details 
//we dsiplay the sushi name and price.
