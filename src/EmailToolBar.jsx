import './styles/EmailToolBar.css'
import { EmailToolBarUl } from './EmailToolBarUl'
import { EmailToolBarBtn } from './EmailToolBarBtn'

export function EmailToolBar() {
    return (
        <nav className="email-toolbar">
            <EmailToolBarUl />

            <div className="space"></div>

            <EmailToolBarBtn />
        </nav>
    )
}