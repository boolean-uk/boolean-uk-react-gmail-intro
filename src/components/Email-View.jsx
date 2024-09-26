import "../styles/stylesheets/EmailView.css"
import EmailContent from "./Email-content";
import EmailToolbar from "./Email-toolbar";

function EmailView() {
  return (
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
    </main>
  );
}

export default EmailView;
