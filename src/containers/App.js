import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      robot: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({ robot: users })
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robot, searchfield } = this.state;
    const filteredrobots = robot.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });

    return robot.length === 0 ?
      <h1>Loading...</h1> :
      <div className="tc">
        <h1 className="f2 fw9 i">Robo Friends</h1>
        <SearchBox searchChange = { this.onSearchChange }/>
        <Scroll>
          <CardList robots = { filteredrobots }/>
        </Scroll>
      </div>
  }
}

export default App;
