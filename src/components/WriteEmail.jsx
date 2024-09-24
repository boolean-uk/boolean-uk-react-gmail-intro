import "../styles/WriteEmail.css";
import defaultImage from "../assets/images/Default.png";
import backArrow from "../assets/icons/back-arrow.png";
import { Underline, Paperclip, Smile, Save, Image, Lock, Edit3 } from 'react-feather';

// eslint-disable-next-line react/prop-types
export default function WriteEmail({onSend}) {
    return (
        <>
        <div className="container">
            <img className="photo" src={defaultImage}></img>
            <div className="textbox">
                <div className="toprow"> 
                    <img className="backarrow" src={backArrow} /> 
                    Freepik Company (no-reply@freepik.com)
                </div>
                <div className="bottomrow">
                    <button className="send-btn" onClick={onSend}>Send</button>
                    <div className="icons">
                        <Underline size={20}/>
                        <Paperclip size={20}/>
                        <Smile size={20} />
                        <Save size={20} />
                        <Image size={20} />
                        <Lock size={20} />
                        <Edit3 size={20} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}