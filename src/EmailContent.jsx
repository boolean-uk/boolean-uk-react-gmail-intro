import { EmailContentTitle } from './EmailContentTitle'
import { EmailContentHeader } from './EmailContentHeader'
import { EmailContentBody } from './EmailContentBody'
import { EmailContentActions } from './EmailContentActions'

export function EmailContent() {
    return (
        <article className="email-content">
            <EmailContentTitle />

            <EmailContentHeader />

            <EmailContentBody />

            <EmailContentActions />
        </article>
    )
}