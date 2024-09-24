import './Email.css'

import ToolBarComponent from './Toolbar.component.jsx'
import EmailcontentComponent from './Emailcontent.component.jsx'

const EmailComponent = () => {

    return (
            <main className="email-view">

                <ToolBarComponent/>

                <EmailcontentComponent/>
            
            </main>
    )

}
export default EmailComponent