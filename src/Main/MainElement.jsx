import Article from "./Article/Article";
import NavElement from "./NavBar/NavElement";

export default function MainElement() {
  return (
    <main className="email-view">
      <NavElement />
      <Article />
    </main>
  );
}
