import ToolBar from "./ToolBar";
import EmailHeader from "./EmailHeader";
import EmailContent from "./EmailContent";

function MainEmail() {
  return (
    <main className="email-view">
      <ToolBar />
      <article className="email-content">
        <EmailHeader />
        <EmailContent />
      </article>
    </main>
  );
}

export default MainEmail;
