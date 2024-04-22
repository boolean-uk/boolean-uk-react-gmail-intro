import "./styles/WriteEmail.css"

function WriteEmail() {
    return (
        <div className="write-email">
            <img className="avatar" src="" alt="Profile Picture" />
            <section className="compose-email">
                <div className="top-bar">
                    <svg></svg>
                    <svg></svg>
                    <span>User Name (username@gmail.com)</span>
                </div>
                <textarea></textarea>
                <div className="bottom-bar">
                    <div className="send">
                        <button>Send</button>
                        <button>\/</button>
                    </div>
                    <div className="text-toolbar">
                        <span>I</span>
                        <span>I</span>
                        <span>I</span>
                        <span>I</span>
                        <span>I</span>
                        <span>I</span>
                        <span>I</span>
                        <span>I</span>
                    </div>

                    <div>
                        <svg></svg>
                        <svg></svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WriteEmail
