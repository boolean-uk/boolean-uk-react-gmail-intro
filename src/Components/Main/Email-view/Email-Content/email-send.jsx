import "../../../../styles/Email-content.css"
import AUnderline from "../../../../assets/svgs/aUnderline.svg"
import PaperClip from "../../../../assets/svgs/paperclip.svg"
import Connect from "../../../../assets/svgs/connect.svg"
import Gallery from "../../../../assets/svgs/gallery.svg"
import Smiley from "../../../../assets/svgs/smiley.svg"
import Triangle from "../../../../assets/svgs/triangle.svg"
import BriefCase from "../../../../assets/svgs/briefcase.svg"
import Pen from "../../../../assets/svgs/pen.svg"
import Rubbish from "../../../../assets/svgs/rubbish.svg"
import Reply from "../../../../assets/svgs/reply.svg"
import More from "../../../../assets/svgs/more.svg"
import ProfileCircle from "../../../../assets/svgs/profileCircle.svg"

export default function EmailSend() {
    return (

        <section>
            <form className="emailForm" action="">
                <input className="email-text-box" type="textbox" />
                <button className="sendButton" type="submit">Send</button>
                <ul className="profilePic">
                    <li><img className="profileCircle" src={ProfileCircle} alt="" /></li>
                </ul>
                <ul className="buttonArray">
                    <li><img className="svgs" src={AUnderline} alt="" /></li>
                    <li><img className="svgs" src={PaperClip} alt="" /></li>
                    <li><img className="svgs" src={Connect} alt="" /></li>
                    <li><img className="svgs" src={Smiley} alt="" /></li>
                    <li><img className="svgs" src={Triangle} alt="" /></li>
                    <li><img className="svgs" src={Gallery} alt="" /></li>
                    <li><img className="svgs" src={BriefCase} alt="" /></li>
                    <li><img className="svgs" src={Pen} alt="" /></li>
                </ul>
                <ul className="replySender">
                    <li><img className="svgs" src={Reply} alt="" /></li>
                    <li><p>Freepik Company (no-reply@freepik.com)</p></li>
                </ul>
                <ul className="rubbishOptions">
                    <li><img className="svgs" src={More} alt="" /></li>
                    <li><img className="svgs" src={Rubbish} alt="" /></li>
                </ul>
            </form>
        </section>
    )
}