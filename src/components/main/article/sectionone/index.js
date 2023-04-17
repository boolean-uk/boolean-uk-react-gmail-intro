import React from "react";
import './styles.css'

import flaticonWelcomeImage from 'D:/Temporary/react-gmail-intro/src/assets/images/flaticon-welcome-image.png'

function SectionOne() {
    return (
        <section className="email-body">
        <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
        </section>
    )
}

export default  SectionOne;