import React from "react"
import Article from "./Article"
import EmailNavigation from "../email/EmailNavigation"

const MainContent = () => {

    return (
        <main className="email-view">
            <EmailNavigation minPageNumber={1} maxPageNumber={25} />
            <Article />
        </main>
    );
}

export default MainContent;