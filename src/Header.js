import logo from './logo.png';

const Header = () => {
    return (
        <header>
            <div className="wrapper headerContainer">
                <img className="logo" src={logo} alt="logo" />
                <h1>Sweater Weather</h1>
            </div>
        </header>
    )
}

export default Header; 