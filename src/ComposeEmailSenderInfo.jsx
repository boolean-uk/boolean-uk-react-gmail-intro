import './styles/ComposeEmailSenderInfo.css'
import { SenderInfoLeft } from "./SenderInfoLeft"
import { SenderInfoNewWindow } from "./SenderInfoNewWindow"

export function ComposeEmailSenderInfo() {
    return (
        <div className="sender-info">
            <SenderInfoLeft />

            <div className="space"></div>

            <SenderInfoNewWindow />
        </div>
    )
}