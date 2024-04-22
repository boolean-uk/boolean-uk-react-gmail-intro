export default function WriteEmailSection () {
    return (
        <section className="write-email-section">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9tXJJkn1fyxkEr3h34MdVsvdEGpPoBPuuU8jzcUQeA&s" alt="avatar icon" />

            <div className="compose">
                <header>
                <div>DD</div>
                <div className="recipient">will@boolean.co.uk</div>
                </header>
                <textarea wrap="soft"></textarea>
                <footer>
                    <button>Send</button>
                    <div className="footer-icon-l">A</div>
                    <div className="footer-icon-l">P</div>
                    <div className="footer-icon-l">L</div>
                    <div className="footer-icon-l">E</div>
                    <div className="footer-icon-l">D</div>
                    <div className="footer-icon-l">P</div>
                    <div className="footer-icon-l">S</div>
                    <div className="footer-icon-l">F</div>

                    <div className="footer-icon-r">B</div>
                    <div className="footer-icon-r">T</div>
                </footer>

            </div>
        </section>
    )
}