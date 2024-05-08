import backArrow from './assets/icons/back-arrow.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

export default function EmailHeaderContent(){
  return (
    <header className="email-content--header">
      <Avatar></Avatar>
      <EmailInfo></EmailInfo>
      <DateInfo></DateInfo>
      <EmailActionIcons></EmailActionIcons>
    </header>
  )
}
function EmailActionIcons(){
  return (
    <div className="email-action-icons">
      <ul>
        <ReplyButton></ReplyButton>
        <RateStarButton></RateStarButton>
        <DeleteButton></DeleteButton>
      </ul>
    </div>
  )
}
function DeleteButton(){
  return (
    <li>
    <DeleteImage></DeleteImage>
  </li>
  )
}
function DeleteImage(){
  return <img  className="icon"  src={rubbishButton}  alt="delete button"/>
}
function RateStarButton(){
  return (
    <li>
      <StarImage></StarImage>
    </li>
  )
}
function StarImage(){
  return <img className="icon" src={rateStarButton} alt="star button" />
}
function ReplyButton(){
  return(
    <li>
      <ReplyImage></ReplyImage>
    </li>
  )
}
function ReplyImage(){
  return <img className="icon" src={backArrow} alt="reply button" />
}
function Avatar(){
  return (
    <div className="avatar"></div>
  )
}

function EmailInfo(){
  return (
    <div className="email-info">
      <SenderInfo></SenderInfo>
      <UserInfo></UserInfo>
    </div>
  )
}

function SenderInfo(){
  return (
    <div className="sender-info">
      <SenderName></SenderName>
      <SenderEmail></SenderEmail>
    </div>
  )
}

function SenderName(){
  return <h2>Freepik Company</h2>
}

function SenderEmail(){
  return <em>&lt;no-reply@freepik.com&gt;</em>
}

function UserInfo(){
  return (
    <div className="user-info">
      <p>
        to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
      </p>
    </div>
  )
}

function DateInfo(){
 return(
  <div className="date-info">
    <p>17 March 2021, 09:33</p>
  </div>
 )
}