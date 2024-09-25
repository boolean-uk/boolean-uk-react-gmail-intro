import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../../styles/IconList.css";

interface IconListProps {
    iconArray: {id: number, icon: IconDefinition}[]
}

const IconList = ({ iconArray }: IconListProps) => {

    return (
        <div className="icon--list">
            { iconArray.map((item) => (
                <FontAwesomeIcon key={item.id} className="icons" icon={item.icon} />
            ))}
        </div>
    );
}

export default IconList;