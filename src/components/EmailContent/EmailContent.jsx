
import './Email.css'
import EmailAction from './EmailActions'
import EmailBody from './EmailBody'
import EmailContentHead from './EmailContentHead'
import EmailTitle from './EmailTitle'


function EmailContent(){
    return(
        <>
        <article className="email-content">
          <EmailTitle />
          <EmailContentHead />
          <EmailBody />
          <EmailAction />
          
        </article>
        </>
    )
}

export default EmailContent