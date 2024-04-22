import MailHeaderAvatar from './MailHeaderAvatar'
import MailInfo from './MailInfo'
import MailDateInfo from './MailDateInfo'
import MailActionIcons from './MailActionIcons'

export default function EmailHeader() {
    return (
        <header className="email-content--header">
            <MailHeaderAvatar />
            <MailInfo />
            <MailDateInfo />
            <MailActionIcons />
        </header>
    )
}