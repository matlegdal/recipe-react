import React, {
  Component
} from 'react';
import './App.css';
import RecipeList from "./RecipeList";
import Nav from "./Nav";

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <Nav />
        <RecipeList />
      </div>
    );
  }
}