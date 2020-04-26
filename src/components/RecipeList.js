import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleChange,
      handleSubmit,
    } = this.props;
    // console.log(recipes);
    return (
      <div>
        <React.Fragment>
          <RecipeSearch
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {/* title */}

          <div className="container my-5">
            <div className="row">
              <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
                <h1 className="slanted-text">Recipe List</h1>
              </div>
            </div>
          </div>

          {/*End of title */}
          <div className="row">
            {recipes.map((recipe) => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={() => handleDetails(0, recipe.recipe_id)}
                />
              );
            })}
          </div>
        </React.Fragment>
      </div>
    );
  }
}
