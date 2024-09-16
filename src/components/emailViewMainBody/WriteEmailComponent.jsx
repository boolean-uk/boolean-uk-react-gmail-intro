import { useState } from 'react';

function WriteEmailComponent() {
    const [isActive, setIsActive] = useState(false);
    const [emailContent, setEmailContent] = useState('');
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
    const [showSendConfirmation, setShowSendConfirmation] = useState(false);

    const handleInputChange = (e) => {
        setEmailContent(e.target.value);
    };

    const handleSend = () => {
        // For sending email
        console.log('Email sent:', emailContent);
        setEmailContent('');
        setIsActive(false);
        setShowSendConfirmation(false);

    };

    const handleCancel = () => {
        if (emailContent.trim() !== '') {
            setShowCancelConfirmation(true);
        } else {
            setIsActive(false);
            setEmailContent('');
        }
    };

    const confirmCancel = () => {
        setIsActive(false);
        setEmailContent('');
        setShowCancelConfirmation(false);
    };

    const confirmSend = () => {
        handleSend();
        setShowSendConfirmation(false);
    };

    return (
        <div className="write-email-container">
        {!isActive &&
            <button className="reply-button" onClick={() => setIsActive(!isActive)}>Reply</button>
        }
        {isActive &&
            <div className='reply'>
                <p className='sender'>Experis AS Company (no-reply@ExperisAs.com)</p>
                <textarea
                    className='reply-field'
                    value={emailContent}
                    onChange={handleInputChange}
                    placeholder="Type your reply here..."
                />
                <div className='reply-button'>
                    <button className='send-button' type='button' onClick={() => setShowSendConfirmation(true)}>Send</button>
                    <button className='cancel-button' type='button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        }
        {showCancelConfirmation && (
            <div className="confirmation-dialog">
                <p>Are you sure you want to cancel? Your changes will be lost.</p>
                <button onClick={confirmCancel}>Yes, cancel</button>
                <button onClick={() => setShowCancelConfirmation(false)}>No, keep editing</button>
            </div>
        )}
        {showSendConfirmation && (
            <div className="confirmation-dialog">
                <p>Are you sure you want to send this email?</p>
                <button onClick={confirmSend}>Yes, send</button>
                <button onClick={() => setShowSendConfirmation(false)}>No, keep editing</button>
            </div>
        )}
    </div>
    );
}

export default WriteEmailComponent;
