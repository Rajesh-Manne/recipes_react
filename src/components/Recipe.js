import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id,
    } = this.props.recipe;
    const { handleDetails } = this.props;

    // console.log(this.props.recipe);
    return (
      <React.Fragment>
        <div className="col-10 col-md-6 col-lg-4 mx-auto my-3">
          <div className="card">
            <img
              src={image_url}
              alt="recipe"
              className="img_card_top rounded"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning slanted-text">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={handleDetails}
              >
                details
              </button>
              <a
                href={source_url}
                className="btn btn-success text-capitalize mx-2"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
