import { Link } from 'react-router-dom';
import type { Messages } from '../../i18n';
import '../../styles/components/footer.css';

type FooterProps = {
  t: Messages;
};

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="siteFooterWrapper">
        {/* ROW 1: BRAND + 3 COLUMNS */}
        <div className="siteFooterTop">
          {/* BRAND SECTION */}
          <div className="siteFooterBrand">
            <h3>EES Construction</h3>
            <p>
              Premium construction and development with a focus on quality,
              elegance, trust, and modern project delivery.
            </p>
            {/* SOCIAL ICONS */}
            <div className="siteFooterSocial">
              <a 
                href="https://linkedin.com" 
                title="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://instagram.com" 
                title="Instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="https://twitter.com" 
                title="Twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a 
                href="https://facebook.com" 
                title="Facebook" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>

          {/* COLUMN 1: PAGES */}
          <div className="siteFooterCol">
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="siteFooterCol">
            <h4>Services</h4>
            <span>Construction</span>
            <span>Architecture</span>
            <span>Interior Design</span>
            <span>Project Management</span>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div className="siteFooterCol">
            <h4>Contact</h4>
            <span>Nicosia, Cyprus</span>
            <a href="mailto:info@eesconstruction.com">info@eesconstruction.com</a>
            <a href="tel:+90500000000">+90 500 000 00 00</a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="siteFooterDivider"></div>

        {/* ROW 2: BOTTOM INFO */}
        <div className="siteFooterBottom">
          <div className="siteFooterBottom--left">
            <p>&copy; {currentYear} EES Construction. All rights reserved.</p>
          </div>

          <div className="siteFooterBottom--center">
            <p>{t.footer}</p>
          </div>

          <div className="siteFooterBottom--right">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}