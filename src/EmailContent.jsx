import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import EmailHeaderContent from './EmailHeaderContent'

export default function EmailContent(){
  return (
    <article className="email-content">
        <EmailTitle></EmailTitle>
        <EmailHeaderContent></EmailHeaderContent>
        <SectionEmailBody></SectionEmailBody>
        <EmailActionButtons></EmailActionButtons>
      </article>
  )
}

function EmailTitle(){
  return (
    <div className="title">
      <h1>Welcome to Flaticon</h1>
    </div>
  )
}

function SectionEmailBody(){
  return (
    <section className="email-body">
      <SectionEmailContetnt></SectionEmailContetnt>
    </section>
  )
}
function SectionEmailContetnt(){
  return (
    <div className="content">
    <ImageContent></ImageContent>
  </div>
  )
}
function ImageContent(){
  return <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
}
function EmailActionButtons(){
 return(
  <section className="email-actions">
  <ReplyButton></ReplyButton>
  <ForwardButton></ForwardButton>
</section>
 )
}
function ReplyButton(){
  return <button>Reply</button>
}
function ForwardButton(){
  return <button>Forward</button>
}