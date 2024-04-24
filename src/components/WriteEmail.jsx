import '../styles/WriteEmail.css'

function WriteEmail() {

    return (
        <div className='write_email'>
            <div className='avatar'>
            <img
                src="https://lh3.google.com/u/0/ogw/ADGmqu9SnLFSXSNhQekSAI8qQNn9h-VAhGGPPtNZefIQ=s64-c-mo"
                alt="avatar"
              /> 
            </div>
            <div className="compose">
                <form>
                    <input name="to" placeholder="To :Freepik Company(no-reply@freepik.com" type="email" />
                    <input name="subject" placeholder="Subject" type="text"/>
                    <input name="message" placeholder="Message" type="text" className="message"/>
                    <div className="options">
                        <button
                            className="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WriteEmail