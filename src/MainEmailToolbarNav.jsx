import EmailToolbarNavUL from "./EmailToolbarNavUL"

export default function MainEmailToolbarNav () {
    return (
        <nav className="email-toolbar">
        <EmailToolbarNavUL />
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
    )
}