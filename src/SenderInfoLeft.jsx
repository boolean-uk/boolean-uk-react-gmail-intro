import './styles/SenderInfoLeft.css'
import { SenderInfoLeftShare } from "./SenderInfoLeftShare"
import { SenderInfoLeftDown } from "./SenderInfoLeftDown"
import { SenderInfoLeftText } from "./SenderInfoLeftText"

export function SenderInfoLeft() {
    return (
        <div className="left">
            <SenderInfoLeftShare />

            <SenderInfoLeftDown />

            <SenderInfoLeftText />
        </div>
    )
}