import Toolbar from './Toolbar'
import Content from './Content'

export default function EmailView() {
  return (
    <>
      <main className="email-view">
        <Toolbar />
        <Content />
      </main>
    </>
  );
}
