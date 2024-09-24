import React from "react";

interface ImageComponentProps {
    name: string
    source: string
    alternative: string
}

const ImageComponent = ({ name, source, alternative }: ImageComponentProps) => {
    return (
        <>
            <img className={name} src={source} alt={alternative} />
        </>
    );
}

export default ImageComponent;