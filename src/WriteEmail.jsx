import './styles/WriteEmail.css'
import { WriteEmailUser } from './WriteEmailUser'
import { ComposeEmail } from './ComposeEmail'

export function WriteEmail() {
    return (
        <section className="write-email">
            <WriteEmailUser />

            <ComposeEmail />
        </section>
    )
}