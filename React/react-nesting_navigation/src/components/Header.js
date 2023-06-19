import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
      <Nav />
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src={avatar} alt="avatar" />
      </button>
    </header>
  );
}
