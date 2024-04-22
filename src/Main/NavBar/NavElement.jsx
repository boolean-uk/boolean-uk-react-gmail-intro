import UlNavElement from "./UlNavElement";
import PageNum from "./PageNum";

export default function NavElement() {
  return (
    <nav className="email-toolbar">
      <UlNavElement />
      <div className="space"></div>
      <PageNum />
    </nav>
  );
}
