
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-dark container-fluid">
            <Link to="/">
                <img src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/footer-logo.svg" alt="youthinklogo" />
            </Link>
            <div>
                <Link to="/" className="btn btn-outline-dark" style={{ color: "white" }} >Home</Link>
                <Link to="/todos" className="btn btn-outline-dark" style={{ color: "white" }} >Todo</Link>
            </div>
        </nav>
    )
}

export default Nav;