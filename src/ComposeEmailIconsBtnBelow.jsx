import './styles/ComposeEmailIconsBtnBelow.css'
import { ComposeEmailBelowLeft } from "./ComposeEmailBelowLeft"
import { ComposeEmailBelowRight } from "./ComposeEmailBelowRight"

export function ComposeEmailIconsBtnBelow() {
    return (
        <div className="below">
            <ComposeEmailBelowLeft />

            <div className="space"></div>

            <ComposeEmailBelowRight />
        </div>
    )
}