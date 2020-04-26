import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleChange, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 text-center">
              <h1 className="slanted-text text-capitalize">
                Search for recipe with <span></span>
                <strong className="text-danger text-capitalize">
                  food 2 fork
                </strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chickens, onions, carrots"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
