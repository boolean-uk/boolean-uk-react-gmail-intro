import './Email.css'


import EmailheaderComponent from './Emailheader.component.jsx'
import EmailbodyComponent from './Emailbody.component.jsx'
import EmailactionsComponent from './Emailactions.component.jsx'

const EmailcontentComponent = () => {

    return(
        <article className="email-content">
            
            <div className="title">
                <h1>Welcome to Flaticon</h1>
            </div>

            <EmailheaderComponent/>

            <EmailbodyComponent/>
                
            <EmailactionsComponent/>

        </article>
    )
}
export default EmailcontentComponent