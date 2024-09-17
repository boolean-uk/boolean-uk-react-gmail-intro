import './styles/ComposeEmailIconsBtn.css'
import { ComposeEmailEllipsis } from "./ComposeEmailEllipsis"
import { ComposeEmailIconsBtnBelow } from "./ComposeEmailIconsBtnBelow"

export function ComposeEmailIconsBtn() {
    return (
        <div className="icons-btn">
            <ComposeEmailEllipsis />

            <ComposeEmailIconsBtnBelow />
        </div>
    )
}