import * as React from "react";

import "./Progress.css";

interface ILoadingProps {
  readonly isBusy: boolean;
}

function Progress(props: ILoadingProps) {
  let progress: JSX.Element | null = null;

  if (props.isBusy) {
    progress = (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
        />
      </div>
    );
  }

  return progress;
}

export default Progress;
