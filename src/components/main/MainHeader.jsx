import Avatar from './Avatar'
import DateInfo from './DateInfo'
import EmailActionsIcons from './EmailActionsIcons'
import EmailInfo from './EmailInfo'

function MainHeader() {
    return (
        <header className="email-content--header">
            <Avatar />
            <EmailInfo />
            <DateInfo />
            <EmailActionsIcons />
        </header>
    )
}

export default MainHeader