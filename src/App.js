import React, {
  Component
} from 'react';
import './App.css';
import Recipe from "./Recipe"

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <Recipe
          title="pasta"
          ingredients={["flour", "water"]}
          instructions="Mix ingredients"
          imgSrc="spaghetti.jpg" />
      </div>
    );
  }
}