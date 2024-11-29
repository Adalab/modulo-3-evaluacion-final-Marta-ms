import "../scss/layout/Main.scss"
import logo from "../images/RyM.png"

function Header() {
  return (
    <>
        <header className="header">
            <img className="logo" src={logo} alt="Rick and Morty tittle" />
        </header>
    </>
  )
}

export default Header