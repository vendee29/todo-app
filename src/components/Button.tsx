import * as React from "react";
import "./Button.css";

interface Props {
  text: string;
  onClick: (event: any) => void;
}

const Button = (props: Props): JSX.Element => {
  const clickHandler = (event: any) => {
    props.onClick(event);
  };

  return (
    <button onClick={clickHandler} className="button">
      {props.text}
    </button>
  );
};

export default Button;
