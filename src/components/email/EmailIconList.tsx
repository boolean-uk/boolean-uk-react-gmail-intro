import React from "react";
import { backArrow, rateStarButton, rubbishButton } from "../..";
import ImageComponent from "../layout/ImageComponent";

const EmailIconList = () => {
  const imageList = [
    { id: 1, name: "icon", src: backArrow, alt: "reply button" },
    { id: 2, name: "icon", src: rateStarButton, alt: 'star button' },
    { id: 3, name: "icon", src: rubbishButton, alt: 'delete button' }
  ];

    return (
        <div className="email-action-icons">
              <ul>
                { imageList.map((item) => (
                  <li key={item.id}>
                    <ImageComponent 
                      name={item.name} 
                      source={item.src} 
                      alternative={item.alt}
                    />
                  </li>
                ))}
              </ul>
        </div>
    );
}

export default EmailIconList;