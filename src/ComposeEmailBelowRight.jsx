import './styles/ComposeEmailBelowRight.css'
import { BelowRightEllipsisVertical } from "./BelowRightEllipsisVertical"
import { BelowRightRemove } from "./BelowRightRemove"

export function ComposeEmailBelowRight() {
    return (
        <div className="right">
            <BelowRightEllipsisVertical />

            <BelowRightRemove />
        </div>
    )
}