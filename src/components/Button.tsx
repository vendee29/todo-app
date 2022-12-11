import * as React from 'react';

interface Props {
    text: string;
}

const Button = (props: Props): JSX.Element => {
  return (
    <button>{props.text}</button>
  )
};

export default Button;