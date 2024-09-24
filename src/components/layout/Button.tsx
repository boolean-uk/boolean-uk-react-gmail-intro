import React from "react";

interface ButtonProps {
    buttonText: string
    classname?: string
}

const Button = ({ buttonText, classname }: ButtonProps) => {
    return (
        <>
            <button className={classname}>{buttonText}</button>
        </>
    );
}

export default Button;