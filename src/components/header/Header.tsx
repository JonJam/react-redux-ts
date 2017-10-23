import * as React from "react";
import NavBar from "./navBar/NavBar";
import Progress from "./progress/Progress";

interface IHeaderProps {
  readonly isBusy: boolean;
  readonly isAuthenticated: boolean;
  handleSignOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Header({ isBusy, ...rest }: IHeaderProps) {
  return (
    <div className="sticky-top">
      <NavBar {...rest} />
      <Progress isBusy={isBusy} />
    </div>
  );
}
