import React, {
  Component
} from 'react';
import './App.css';
import RecipeList from "./RecipeList"

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <RecipeList />
      </div>
    );
  }
}