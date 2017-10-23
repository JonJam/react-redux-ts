import * as React from "react";

export default class HomePage extends React.Component {
  public render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3 text-center">{"React app"}</h1>
        <p className="lead text-center">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel augue turpis. Suspendisse malesuada lacus nec metus pharetra sodales. Nunc tellus quam, mollis a dictum et, luctus maximus libero."
          }
        </p>
      </div>
    );
  }
}
