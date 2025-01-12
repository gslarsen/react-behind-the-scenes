import { memo } from "react";
import { log } from "../log.js";
import logoImg from "../assets/logo.png";

const Header = memo(() => {
  log("<Header /> rendered", 1);

  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind The Scenes</h1>
    </header>
  );
});

// The "react/display-name" rule in ESLint often doesn't recognize arrow function components when they are wrapped with React.memo() because the underlying mechanism for inferring the component name in React DevTools relies on the function name itself, which is lost when using an anonymous arrow function within memo()
Header.displayName = "Header";

export default Header;
