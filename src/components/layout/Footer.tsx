import { Link } from 'react-router-dom';
import type { Messages } from '../../i18n';
import '../../styles/components/footer.css';

type FooterProps = {
  t: Messages;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="siteFooter">
      <div className="siteFooterTop">
        <div className="siteFooterBrand">
          <h3>EES Construction</h3>
          <p>
            Premium construction and development with a focus on quality,
            elegance, trust, and modern project delivery.
          </p>
        </div>

        <div className="siteFooterCol">
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="siteFooterCol">
          <h4>Services</h4>
          <span>Construction</span>
          <span>Architecture</span>
          <span>Interior Design</span>
          <span>Project Management</span>
        </div>

        <div className="siteFooterCol">
          <h4>Contact</h4>
          <span>Nicosia, Cyprus</span>
          <span>info@eesconstruction.com</span>
          <span>+90 500 000 00 00</span>
        </div>
      </div>

      <div className="siteFooterBottom">
        <span>{t.footer}</span>
      </div>
    </footer>
  );
}