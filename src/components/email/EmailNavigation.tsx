import React from "react";
import { backArrow, downloadButton, rubbishButton } from "../..";
import ImageComponent from "../layout/ImageComponent";
import Button from "../layout/Button";

interface EmailNavigationProps {
  minPageNumber: number
  maxPageNumber: number
}

const EmailNavigation = ({ minPageNumber, maxPageNumber }: EmailNavigationProps) => {

  const iconList = [
    {id: 1, name: "icon", src: backArrow, alt: "reply button" },
    {id: 2, name: "icon", src: downloadButton, alt: "archive button" },
    {id: 3, name: "icon", src: rubbishButton, alt: "delete button" },
  ]
    return (
        <nav className="email-toolbar">
          <ul>
            { iconList.map((icon) => (
              <li>
                <ImageComponent name={icon.name} source={icon.src} alternative={icon.alt} />
              </li>
            ))}
          </ul>
          <div className="space" />
          <div>
            <p>{`${minPageNumber} of ${maxPageNumber}`}</p>
            <Button buttonText="&lt;"/>
            <Button buttonText="&gt;"/>
          </div> 
        </nav>
    );
}

export default EmailNavigation;