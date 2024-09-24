import React from "react";

import '../../styles/EmailSection.css';
import Button from "../layout/Button";

const EmailSection = () => {

    return (
        <div className="textarea-container">
            <textarea className="email-section" />
            <Button buttonText="Send" classname="send-btn"/>
        </div>
        
    );
}


export default EmailSection;