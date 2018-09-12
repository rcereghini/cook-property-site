import React from "react";
import "../styles/headerBox.css";

function HeaderBox(props) {
  return (
    <div className="jumbotron headerBox">
      <div className="layer">
        <h1 className="display-4 money">{props.homePrice}</h1>
        <p className="lead address">
          <span className="topAddress">{props.streetAddress}</span>
          <br />
          {props.cityStateZip}
        </p>
        <p className="business">{props.realty}</p>
        <a
          className="btn btn-primary btn-lg removeUnderline"
          href="mailto:scottcookhomes@gmail.com?subject=Interested%20in%2024019%20S%20201st%20Place"
          role="button"
        >
          REQUEST MORE INFO
        </a>
        <div className="jumboBottom">
          <p>
            <span className="jumboBottomNum">{props.bedrooms}</span>
            <br />BEDROOM
          </p>
          <p>
            <span className="jumboBottomNum">{props.bathrooms}</span>
            <br />BATHROOM
          </p>
          <p>
            <span className="jumboBottomNum">{props.squareFeet}</span>
            <br />SQUARE FEET
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderBox;
