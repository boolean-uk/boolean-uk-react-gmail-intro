function ComposeEmail() {
    return (
        <section className="compose-email">
            <div className="compose-header">
                <label htmlFor="to">To:</label>
                <input type="email" id="to" name="to" placeholder="Recipient's email"/>
            </div>

            <div className="compose-header">
                <label htmlFor="subject">Subject:</label>   
                <input type="text" id="subject" name="subject" placeholder="Email subject"/>             
            </div>

            <div className="compose-body">
              <textarea
                 id="email-body"
                 name="email-body"
                placeholder="Write your email here..."
              />
            </div>

            <div className="compose-actions">
                <button className="send-button">Send</button>
                 <button className="discard-button">Discard</button>
             </div>
        </section>
    );
}

export default ComposeEmail;