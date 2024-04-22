import './styles/EmailContentHeader.css'
import { EmailContentHeaderInfo } from './EmailContentHeaderInfo'
import { EmailContentHeaderDateInfo } from './EmailContentDateInfo'
import { EmailContentHeaderIcons } from './EmailContentHeaderIcons'

export function EmailContentHeader() {
    return (
        <header className="email-content--header">
            <div className="avatar"></div>

            <EmailContentHeaderInfo />

            <EmailContentHeaderDateInfo />

            <EmailContentHeaderIcons />
        </header>
    )
}