import * as React from "react";
import "./Button.css";

interface Props {
  text: string;
  onClick: (event: React.MouseEvent) => void;
}

const Button = (props: Props): JSX.Element => {
  const clickHandler = (event: React.MouseEvent) => {
    props.onClick(event);
  };

  return (
    <button onClick={clickHandler} className="button">
      {props.text}
    </button>
  );
};

export default Button;
