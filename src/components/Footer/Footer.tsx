import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">© {new Date().getFullYear()}. Maxim Grivennyy</p>
        </footer>
    )
}

export default Footer;