import { Component } from "react";
import Card from "./Components/card-component/Card.component.jsx";
import SearchBox from "./Components/search-component/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return {
            monsters: users,
          };
        });
      });
  }

  onSearchChange = (event) => {
    const { value } = event.target;
    const searchField = value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className = "monster-search-box"
          placeholder="search monsters"
          onHandleChange={onSearchChange}
        />
        <Card monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
