import EmailToolbarIcons from "./EmailToolbarIcons"
import Pagination from "./Pagination"
import Space from "./Space"

function EmailToolbar() {
    return (
        <nav className="email-toolbar">
                <EmailToolbarIcons />
                <Space />
                <Pagination />
        </nav>
    )
}

export default EmailToolbar