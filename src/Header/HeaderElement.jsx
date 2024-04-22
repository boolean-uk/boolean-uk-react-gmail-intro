import LeftMenu from "./LeftMenu";
import Search from "./Search";

export default function HeaderElement() {
  return (
    <header className="header">
      <LeftMenu />
      <Search />
    </header>
  );
}
