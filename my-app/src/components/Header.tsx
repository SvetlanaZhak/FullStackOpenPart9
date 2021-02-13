import { HeaderProps } from "../types";

export const Header: React.FC<HeaderProps> = props => {
  return <h1>{props.name}</h1>;
};
