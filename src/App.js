import React,{ Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //console.log(' Constructing the initial state of the component');
  }
  // mounting user to the DOM
  
  componentDidMount() {
    //console.log('Mounting data into the DOM')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }
        // () => {
        //   console.log(this.state);
        // }
      )
    );
  }
    
  onSearchChange = (event) => {
          console.log(event.target.value);

          const searchField = event.target.value.toLocaleLowerCase();
        
          this.setState(() => {
            //return { searchField: filteredMonsters }
            return { searchField }
          })
        }
 
  render() {
    console.log('Rendering');

    // destructuring our variables for optimization

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchField);
            });
            
    return (
        
      <div className="App">
        <h1 className='app-title'>MONSTERS ROLODEX</h1>
          <SearchBox
            className = 'monsters-search-box'
            onChangeHandler={onSearchChange}
            placeholder='Search Monters'
        />
        
          {/* {
            filteredMonsters.map((monster) => {
              return <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            })
          }         */}
        
          <CardList monsters={ filteredMonsters } />
      </div>
    );    
  } 
}

export default App;

