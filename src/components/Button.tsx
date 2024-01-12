import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
}

export const Button = (props: ButtonProps) => {

    return (
        <button onClick={props.onClick}>{props.title}</button>
    )
}