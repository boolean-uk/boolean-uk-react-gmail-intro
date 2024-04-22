import NavigationLink from "../NavigationLink"
import NavigationCheckBox from "../NavigationCheckBox"


export default function Navigation() {
    return(
        <nav className="left-menu">
        <ul className="inbox-list">
            <NavigationLink text='Inbox' className='item active' count={'3'}/>
            <NavigationLink text='Starred' className='item' count={'2'}/>
            <NavigationCheckBox text='Hide Read' checked={true} />
        </ul>
      </nav>
    )
}