import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";

function EmailContent() {
  return (
    <>
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </>
  );
}
export default EmailContent;
