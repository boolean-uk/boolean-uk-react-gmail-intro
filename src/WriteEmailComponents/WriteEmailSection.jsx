import WriteEmailHeader from './WriteEmailHeader'
import WriteEmailFooter from './WriteEmailFooter.jsx'

export default function WriteEmailSection () {
    return (
        <section className="write-email-section">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9tXJJkn1fyxkEr3h34MdVsvdEGpPoBPuuU8jzcUQeA&s" alt="avatar icon" />

            <div className="compose">
                <WriteEmailHeader />
                <textarea wrap="soft"></textarea>
                <WriteEmailFooter />
            
            </div>
            
        </section>
    )
}