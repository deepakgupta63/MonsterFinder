import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component'

import {SearchBox} from './components/search-box/search-box.component'

// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       valueString: 'Hello Deepak'
//     }
//   }


//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//            {this.state.valueString}
//           </p>
//           <button onClick = {()=>this.setState({valueString: 'You Clicked the button'})}>Click to change</button>
//         </header>
//       </div>
//     );
//   }

// }



class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name:'Frankenstine',
          id: 1
        },
        {
          name:'Zombie',
          id:2
        },
        {
          name:'Dracula',
          id:3
        },
      ],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => {
      console.log(users);
      this.setState({monsters: users})
    })
  }


  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        {
        /* <input type = 'search'
         placeholder='Search Monster'
         onChange = {e => this.setState({searchField: e.target.value}, () => console.log(this.state.searchField))} /> */}
         <h1 className = 'title'>Monster Finder</h1>
        <SearchBox placeholder='Search Monster' handleChange = {e => this.setState({searchField: e.target.value})}/>
        <Cardlist monsters = {filteredMonsters}> 
         </Cardlist>
      </div>
    );
  }

}

// function App() {
  
// }

export default App;
