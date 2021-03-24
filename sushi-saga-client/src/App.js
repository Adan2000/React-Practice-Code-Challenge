import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    currentIndex: 0,
    money : 100,
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      let moddedSushis = data.map(obj => {
        obj.eaten = false; 
        return obj
      })
      this.setState({sushis: moddedSushis})
    })
  }
  //1. we do a fetch to the sushi api turn that response into json data
  //we then created a variable called moddedSushi, we pass in the response
  //with that response we map over it, pass in the array inside the hash
  //we set that object a new value, (eaten) and set it to false. 
  //we then return that newly created object.
  //then we use that data that we modified and store it in the state. (empty sushi array)


  nextFour = () => {
    this.setState({currentIndex: this.state.currentIndex + 4})
  }
  //8.when this gets triggered, 
  //we say currentIndex (0), we want to set that to the state current index BUT add 4 
  //now we have our curerent index as 4 more, so if we initially passed in (0, 4), now we are changing the state and adding 4
  //so now on our render it we will pass (4, 8)

  eatASushi = sushi => {
    if (sushi.price > this.state.money){
      alert("You broke the bank!")
    } else {
      sushi.eaten = true 
      this.setState({
        money: this.state.money - sushi.price
      })
    }

  }
  //9. we also had passed this function down. Which when onClick gets trigered this function will recieve a sushi.
  //with that array we check the price of that sushi, and compare that to the money amount of the current state. (we never passed down money state)
  //if the price is higher then we display a message saying "you broke the bank"
  //ELSE (we do two trhings)
  //we set the sushi's eaten element (inside the sushi array NOT THIS STATE) equal to true, we originally set it to false in our fetch when we modified our data
  //we then say the money: (state) is equal to the current money state's money amount minus the price of the sushi we recieved. 

  render() {
    const { sushis, currentIndex, money } = this.state
    return (
      <div className="app">
        <SushiContainer sushis={sushis.slice(currentIndex, currentIndex + 4)}
        nextFour={this.nextFour}
        eatSushi={this.eatASushi}/>
        <Table money={money} eatenSushi={sushis.filter(soosh => soosh.eaten === true)}/>
      </div>
    );
  }
}

export default App;
//2. now that we set the state and put our sushi data in the state
//we use the slice. that return a shallowc of any array, (2, 4) would return index 2 and the index 4 (where it ends but not returned) so basically the 1 before it ends
//we pass in the current index 0, and current index again but add 4, 
//so (0, 4) so it will display (1, 2, 3, 4) 
//because 
//0 is 1
//1, is 2
//2, ia 3
//3, is 4  
//4, is 5 BUT it return the one before that always.
//the +4 indicates how much we increase our second index by so we are passing in (0, 4)
//meaning splice will return index 0-4, not including the 5th one but one before it. As that is the standared rule with splice.

//we also pass in the nextFour Function
//we also pass in a eatASushi function

//10. for our <Table /> component that we are also rendering we passed in the money state, 
//AND we filtered the sushis (state, which is an array of sushis) and we filtered for only the ones that have the sushi eaten value equaal to true
//and we pass those sushis as "eatenSushi" because of course theyre eaten value is true (meaning they have indeed been eaten)

