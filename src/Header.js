import logo from './logo.png';

const Header = () => {
    return (
        <header>
            <div className="wrapper headerContainer">
                <img className="logo" src={logo} alt="Logo of a Sweater" />
                <h1 className='mainName'>Sweater Weather</h1>
            </div>
        </header>
    )
}

export default Header; 