import ListItemOne from './ListItemOne.jsx'
import ListItemTwo from './ListItemTwo.jsx'
import ListItemThree from './ListItemThree.jsx'


function inboxListUl() {
    return (
        <ul className="inbox-list">
            <ListItemOne />
            <ListItemTwo />
            <ListItemThree />
        </ul>
    )
}

export default inboxListUl