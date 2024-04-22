import './styles/EmailContentHeaderInfo.css'
import { EmailSenderInfo } from "./EmailSenderInfo"
import { EmailUserInfo } from "./EmailUserInfo"

export function EmailContentHeaderInfo() {
    return (
        <div className="email-info">
            <EmailSenderInfo />
            
            <EmailUserInfo />
        </div>
    )
}