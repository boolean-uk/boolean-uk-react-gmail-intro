import "../styles/email-content.css"

import ContentHeaderComponent from "./ContentHeaderComponent";
import EmailActionComponent from "./EmailActionsComponent";
import EmailBodyComponent from "./EmailBodyComponent";

function EmailContentComponent() {
  return (
    <article>
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <ContentHeaderComponent/>
      <EmailBodyComponent/>
      <EmailActionComponent />
    </article>
  );
}

export default EmailContentComponent