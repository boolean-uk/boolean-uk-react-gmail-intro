
import LogoComponent from "./LogoComponent"
import MenuIconComponent from "./MenuIconComponent"

function LeftMenuComponent(){
    return (
        <div className="left-menu">
          <MenuIconComponent/>
          <LogoComponent/>
        </div>
    )
}

export default LeftMenuComponent