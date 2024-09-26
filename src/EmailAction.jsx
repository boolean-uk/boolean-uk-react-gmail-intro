import './styles/EmailAction.css'

function EmailAction() {
    return (<main className="email-action-1">
        <article className="email-content-1">
          <header className="email-content--header-1">
            <div className="avatar1"></div>
              <div className="sender-info1">
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
              </div>
          </header>
          <div className="reply-body1">
          <textarea placeholder="Write your reply..."></textarea>
        </div>
        <section className="email-actions">
          <button>Send</button>
        </section>
      </article>
    </main>)

}


export default EmailAction