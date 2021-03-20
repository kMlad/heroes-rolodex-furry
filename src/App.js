import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((heroArr) => this.setState({ heroes: heroArr }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { heroes, searchField } = this.state;
    const filteredHeroes = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Heroes Rolodex</h1>
        <h2 className="sub-header">Furry edition</h2>
        <SearchBox
          placeholder="search heroes"
          handleChange={this.handleChange}
        />
        <CardList heroes={filteredHeroes} />
      </div>
    );
  }
}

export default App;
