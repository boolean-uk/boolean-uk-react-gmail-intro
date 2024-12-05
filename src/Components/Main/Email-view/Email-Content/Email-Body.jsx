import flaticonWelcomeImage from '/src/assets/images/flaticon-welcome-image.png'

import '../../../../styles/Email-body.css'

function EmailBody() {
    return (
        
            <>
                <div className="content">
                    <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
                </div>
            </>
        
    )
}

export default EmailBody