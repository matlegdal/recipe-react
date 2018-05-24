import React, { Component } from "react";
import "./Recipe.css";

export default class Recipe extends Component {
    render() {
        const { title, instructions, imgSrc } = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h2 className="recipe-card-title">{title}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{instructions}</p>
                </div>


            </div>
        );
    }
}