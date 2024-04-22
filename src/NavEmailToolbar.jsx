import downloadButton from './assets/icons/download-button.png'
import backArrow from './assets/icons/back-arrow.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

export default function NavEmailToolbar(){
  return (
    <nav className="email-toolbar">
          <EmailButtons></EmailButtons>
          <SpaceDiv></SpaceDiv>
          <PageNumberDiv></PageNumberDiv>
        </nav>
  )
}
function SpaceDiv(){
  return <div className="space"></div>
}
function EmailButtons(){
  return (
    <ul>
      <ReplyButton></ReplyButton>
      <ArchiveButton></ArchiveButton>
      <DeleteButton></DeleteButton>
   </ul>
  )
}
function ReplyButton(){
  return (
    <li>
      <ReplyImage></ReplyImage>
    </li>
  )
}
function ReplyImage(){
  return <img className="icon" src={backArrow} alt="reply button" />
}
function ArchiveButton(){
  return (
    <li>
      <ArchiveImage></ArchiveImage>
    </li>
  )
}
function ArchiveImage(){
  return <img className="icon" src={downloadButton} alt="archive button" />
}
function DeleteButton(){
  return (
    <li>
      <DeleteImage></DeleteImage>
    </li>
  )
}
function DeleteImage(){
  return <img className="icon" src={rubbishButton} alt="delete button" />
}
function PageNumberDiv(){
  return (
    <div>
      <PageNumber></PageNumber>
      <BeforButton></BeforButton>
      <NextButton></NextButton>
    </div>
  )
}
function PageNumber(){
  return <p>1 of 25</p>
}
function BeforButton(){
  return <button>&lt;</button>
}
function NextButton(){
  return <button>&gt;</button>
}