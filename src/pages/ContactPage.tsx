import { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { useLanguage } from '../hooks/useLanguage';
import gsap from 'gsap';
import '../styles/contact.css';

export function ContactPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [activeField, setActiveField] = useState<string | null>(null);

  // Magnetic cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title split animation
        const title = document.querySelector('.contactHero h1');

          if (title && !title.classList.contains('split-done')) {
            title.classList.add('split-done');

            const words = (title.textContent || '').split(' ');

            title.innerHTML = words
              .map((word) =>
                `<span class="word">${
                  word
                    .split('')
                    .map((char) => `<span class="char">${char}</span>`)
                    .join('')
                }</span>`
              )
              .join('<span class="space">&nbsp;</span>');



        gsap.fromTo(
            '.char',
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.04,
              duration: 1.2,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: '.contactHero',
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
      }

      gsap.to('.contactHero h1', {
  scrollTrigger: {
    trigger: '.contactHero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  },
  opacity: 1,
});

      gsap.from('.contactSubtitle', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from('.contactMethod', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      });

      gsap.from('.contactForm', {
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: 'power4.out',
        delay: 1,
      });

      gsap.from('.contactInfo', {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power4.out',
        delay: 1,
      });

      // Floating animation for decorative elements
      gsap.to('.floatingOrb', {
        y: -30,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <PageLayout>
      <div ref={containerRef} className="contactContainer">
        {/* Custom Cursor */}
        <div ref={cursorRef} className="customCursor" />

        {/* Floating Orbs Background */}
        <div className="orbsContainer">
          <div className="floatingOrb orb1" />
          <div className="floatingOrb orb2" />
          <div className="floatingOrb orb3" />
        </div>

        {/* Hero Section */}
        <section className="contactHero">
          <h1>Let's Create Something Amazing</h1>
          <p className="contactSubtitle">
            {t.contactPageIntro || 'Ready to bring your vision to life? Get in touch.'}
          </p>
        </section>

        {/* Main Content Grid */}
        <section className="contactGrid">
          {/* Contact Information */}
          <div className="contactInfo">
            <div className="infoHeader">
              <span className="infoLabel">Get in Touch</span>
              <div className="infoLine" />
            </div>

            <div className="contactMethods">
              <a href="mailto:info@eesconstruction.com" className="contactMethod">
                <div className="methodIcon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="methodContent">
                  <span className="methodLabel">Email</span>
                  <span className="methodValue">info@eesconstruction.com</span>
                </div>
                <div className="methodArrow">→</div>
              </a>

              <a href="tel:+905000000000" className="contactMethod">
                <div className="methodIcon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="methodContent">
                  <span className="methodLabel">Phone</span>
                  <span className="methodValue">+90 500 000 00 00</span>
                </div>
                <div className="methodArrow">→</div>
              </a>

              <div className="contactMethod location">
                <div className="methodIcon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="methodContent">
                  <span className="methodLabel">Location</span>
                  <span className="methodValue">Kano, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="socialLinks">
              <span className="socialLabel">Follow Us</span>
              <div className="socialGrid">
                <a href="#" className="socialLink">
                  <span>LinkedIn</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a href="#" className="socialLink">
                  <span>Instagram</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a href="#" className="socialLink">
                  <span>Twitter</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactForm">
            <div className="formHeader">
              <span className="formLabel">Send a Message</span>
              <div className="formLine" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="name" className={activeField === 'name' ? 'active' : ''}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email" className={activeField === 'email' ? 'active' : ''}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="phone" className={activeField === 'phone' ? 'active' : ''}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setActiveField('phone')}
                  onBlur={() => setActiveField(null)}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message" className={activeField === 'message' ? 'active' : ''}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="submitBtn">
                <span className="btnText">Send Message</span>
                <span className="btnIcon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.167 10h11.666M15.833 10l-5-5M15.833 10l-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}