import Heading from "./Heading";
import Header from "./Header";
import EmailBody from "./EmailBody";
import ActionButtons from "./ActionButtons";

export default function Article() {
  return (
    <article className="email-content">
      <Heading />
      <Header />
      <EmailBody />
      <ActionButtons />
    </article>
  );
}
