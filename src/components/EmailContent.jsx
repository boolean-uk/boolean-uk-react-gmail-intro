import EmailBody  from './EmailBody'
import EmailActions  from './EmailBody'
import EmailHeader from './EmailHeader'

import '.././styles/EmailContent.css'

function EmailContent(){
    return (
    <article className="email-content">
        <div className="title">
            <h1>Welcome to Flaticon</h1>
        </div>
        < EmailHeader />
        < EmailBody />
        < EmailActions />
    </article>
    );
}

export default EmailContent;