import Toolbar from './Toolbar'
import Content from './Content'
import EmailReply from './EmailReply';

export default function EmailView() {
  return (
    <>
      <main className="email-view">
        <Toolbar />
        <Content />
        <EmailReply />
      </main>
    </>
  );
}
