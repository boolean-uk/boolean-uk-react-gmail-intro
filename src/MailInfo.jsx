import MailSenderInfo from "./MailSenderInfo"
import MailUserInfo from './MailUserInfo'

export default function MailInfo() {
    return (
        <div className="email-info">
            <MailSenderInfo />
            <MailUserInfo />
        </div>
    )
}