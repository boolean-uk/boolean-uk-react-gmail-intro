import React from "react";

interface ButtonProps {
    buttonText: string
    classname?: string
    clickFunc?: () => void
}

const Button = ({ buttonText, classname, clickFunc }: ButtonProps) => {
    return (
        <>
            <button className={classname} onClick={clickFunc}>{buttonText}</button>
        </>
    );
}

export default Button;