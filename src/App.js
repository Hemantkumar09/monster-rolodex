import { Component } from "react";
// import logo from "./logo.svg";
import CardList from "./components/cardlist/cardlist.comonent";
import SearchBox from "./components/searchbar/searchbox.component";
import "./App.css";

class App extends Component {
  constructor() {
    //console.log("enter");
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //console.log("Component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    //console.log("render from app");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App, outside-box">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
