import './styles/ComposeEmailBelowLeft.css'
import { BelowLeftBtn } from "./BelowLeftBtn"
import { ComposeEmailBelowLeftTextTransform } from "./ComposeEmailBelowLeftTextTransform"
import { ComposeEmailBelowLeftAttach } from "./ComposeEmailBelowLeftAttach"
import { ComposeEmailBelowLeftLink } from "./ComposeEmailBelowLeftLink"
import { ComposeEmailBelowLeftEmoji } from "./ComposeEmailBelowLeftEmoji"
import { ComposeEmailBelowLeftGoogle } from "./ComposeEmailBelowLeftGoogle"
import { ComposeEmailBelowLeftImg } from "./ComposeEmailBelowLeftImg"
import { ComposeEmailBelowLeftLock } from "./ComposeEmailBelowLeftLock"
import { ComposeEmailBelowLeftPen } from "./ComposeEmailBelowLeftPen"

export function ComposeEmailBelowLeft() {
    return (
        <div className="left">
            <BelowLeftBtn />

            <ComposeEmailBelowLeftTextTransform />

            <ComposeEmailBelowLeftAttach />

            <ComposeEmailBelowLeftLink />

            <ComposeEmailBelowLeftEmoji />

            <ComposeEmailBelowLeftGoogle />

            <ComposeEmailBelowLeftImg />

            <ComposeEmailBelowLeftLock />

            <ComposeEmailBelowLeftPen />
        </div>
    )
}