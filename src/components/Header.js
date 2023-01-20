import logo from "../logo.svg" ///Tell webpack this js file uses the image
export default function NavBar() {
    return (
      <header>
        <nav className="nav">
         <a href="https://reactjs.org/"> <img src={logo} alt="somthing went wrong" className="nav-logo"></img></a>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }