import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
    return(
        <header className="header">
            <img src={logo} alt="Chef Claude Logo" />
            <h1>Chef Mixtral</h1>
        </header>
    );
}