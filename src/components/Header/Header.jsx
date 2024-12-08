import s from "./Header.module.css"
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={s.header}>
      <h3>Routing</h3>
      <Navigation/>
    </header>
    )
}

export default Header