import './styles/Header.css'
// import './styles/App.css'

export default function Header(){
  return (
    <header className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
    </header>
  )
}
function SearchBar(){
  return (
    <div className="search">
      <input className="search-bar" placeholder="Search mail" />
    </div>
  )
}

function Logo(){
return (
  <div className="left-menu">
    <SvgMenuIcon></SvgMenuIcon>
    <LogoImage></LogoImage>
  </div>
)
}

function LogoImage(){
  return <img
  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
  alt="gmail logo"
/>
}

function SvgMenuIcon(){
  return(
    <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  )
}