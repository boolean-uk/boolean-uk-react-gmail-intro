import './styles/ComposeEmail.css'
import { ComposeEmailSenderInfo } from "./ComposeEmailSenderInfo"
import { ComposeEmailIconsBtn } from "./ComposeEmailIconsBtn"

export function ComposeEmail() {
    return (
        <div className="compose-email">
            <ComposeEmailSenderInfo />

            <ComposeEmailIconsBtn />
        </div>
    )
}