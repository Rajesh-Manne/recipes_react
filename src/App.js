import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { recipes } from "../src/tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2for.com/api/search?key=b6fb5d86fb9419eeec1129a9e77a1ada",
    base_url:
      "https://www.food2for.com/api/search?key=b6fb5d86fb9419eeec1129a9e77a1ada",
    details_id: 35382,
    index: 1,
    search: "",
    query: "$q",
    error: "",
    // index: false,
  };

  async getRecipes() {
    try {
      {
        /* <RecipeList recipes={this.state.recipes} /> */
      }

      let data = await fetch(this.state.url);
      let jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "your search didnot return any results",
          };
        });
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes,
          };
        });
      }

      // console.log(this.state.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = (pageIndex) => {
    this.setState({
      index: pageIndex,
    });
  };

  handleDetails = (pageIndex, id) => {
    this.setState({
      index: pageIndex,
      details_id: id,
    });
  };

  handleChange = (e) => {
    this.setState(
      {
        search: e.target.value,
      },
      () => {
        console.log(this.state.search);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => {
      const { base_url, query, search } = this.state;
      return {
        url: `${base_url}${query}${search}`,
        search: "",
      };
    }, this.getRecipes());
  };

  render() {
    // console.log(this.state.recipes);

    return (
      <React.Fragment>{this.displayPage(this.state.index)}</React.Fragment>
      // <React.Fragment>
      //   {this.state.index ? (
      //     <RecipeList recipes={this.state.recipes} />
      //   ) : (
      //     <RecipeDetails id={this.state.details_id} />
      //   )}
      // </React.Fragment>
    );
  }
}

export default App;
