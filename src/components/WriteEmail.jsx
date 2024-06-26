import '../styles/WriteEmail.css'

function WriteEmail() {
    return (
        <div className="write-email">
            <h2>Compose Email</h2>
            <form>
                <div>
                    <label>To:</label>
                    <input type="text" name="to" />
                </div>
                <div>
                    <label>Subject:</label>
                    <input type="text" name="subject" />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea name="body"></textarea>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    )
}

export default WriteEmail
