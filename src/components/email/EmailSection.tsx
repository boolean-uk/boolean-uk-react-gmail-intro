
import React, { useState } from "react";

import Button from "../layout/Button";
import ImageComponent from "../layout/ImageComponent";
import { backArrow } from "../..";
import { faA, faFaceSmile, faImage, faLock, faPaperclip, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import IconList from "../layout/IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../styles/EmailSection.css';

const EmailSection = () => {
    const [emailText, setEmailText] = useState<string>('');

    const icons = [
        { id: 1, icon: faA },
        { id: 2, icon: faPaperclip },
        { id: 3, icon: faFaceSmile },
        { id: 4, icon: faPen },
        { id: 5, icon: faImage },
        { id: 6, icon: faLock }
    ];

    const resetEmail = () => setEmailText('');
    const handleEmailChange = (event) => setEmailText(event.target.value);

    const sendEmailSimulation = () => {
        if (emailText !== '') {
            alert(`Sending email:\n${emailText}`);
        }
        else {
            alert('Please, enter your email before sending!');
        }
    }

    return (
        <div className="textarea-container">
            <ImageComponent name="arrow-back" source={backArrow} alternative="arrow back icon" />
            <textarea 
                className="email-section" 
                rows={5} 
                maxLength={150} 
                placeholder="Freepik Company (no-reply@freepik.com)" 
                value={emailText}
                onChange={handleEmailChange}
            />
            <Button buttonText="Send" classname="send-btn" clickFunc={sendEmailSimulation}/>
            <IconList iconArray={icons} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={resetEmail} />
        </div>
        
    );
}

export default EmailSection;