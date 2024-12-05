import flaticonWelcomeImage from '/src/assets/images/flaticon-welcome-image.png'

import ('/src/styles/ContentBody.css')

function ContentBody() {
    return (
        <section className="email-body">
            <div className="content">
                <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>
    )
}

export default ContentBody