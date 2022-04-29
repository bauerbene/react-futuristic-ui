import React from 'react';

export type TButtonProps = {
    label: string;
}

const Button = (props: TButtonProps):JSX.Element => {
    return <button>{props.label}</button>
};

export default Button;