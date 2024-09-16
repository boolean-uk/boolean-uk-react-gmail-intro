
import LeftMenuComponent from "./header/LeftMenuComponent"
import RightMenuComponent from "./header/RightMenuComponent"
function HeaderComponent () {
    return (
    <header className="header">
    <LeftMenuComponent/>
    <RightMenuComponent/>
  </header>
  )
}
export default HeaderComponent