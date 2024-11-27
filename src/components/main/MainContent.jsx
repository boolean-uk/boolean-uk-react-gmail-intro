import ContentNav from "./subMainComponents/Article.jsx"
import Article from './subMainComponents/ContentNav.jsx'
import './main.css'

function main() {
    return (
        <main className="email-view">
            <ContentNav />
            <Article />
        </main>
    )
}

export default main