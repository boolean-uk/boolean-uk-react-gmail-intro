import './styles/Email.css'

import Emailreply from './Emailreply'
import Emailbody from './Emailbody'
import Emailheader from './Emailheader'
import Emailtitle from './Emailtitle'

function Email(){
    return(
        <article className="email-content">
            <Emailtitle/>
            <Emailheader/>
            <Emailbody/>
            <Emailreply/>
        </article>
    )
}

export default Email