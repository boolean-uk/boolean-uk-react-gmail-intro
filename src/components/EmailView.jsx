import EmailContent from "./EmailContent";
import EmailToolbar from "./EmailToolbar";

// import '.././styles/EmailView.css'

function EmailView() {
    return (
        <main className="email-view">
            < EmailToolbar />
            < EmailContent />
        </main>
    );
}

export default EmailView;