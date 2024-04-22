import './styles/BelowLeftBtn.css'
import { BelowLeftBtnText } from "./BelowLeftBtnText"
import { BelowLeftBtnDown } from "./BelowLeftBtnDown"

export function BelowLeftBtn() {
    return (
        <button>
            <BelowLeftBtnText />

            <BelowLeftBtnDown />
        </button>
    )
}