import React from "react";

interface ButtonProps {
    buttonText: string
}

const Button = ({ buttonText }: ButtonProps) => {
    return (
        <>
            <button>{buttonText}</button>
        </>
    );
}

export default Button;