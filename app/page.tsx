'use client';

import { useEffect } from 'react';
import './nexxus.css';

export default function Home() {
  useEffect(() => {
    // Dynamically load animations script in the browser
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = '/animations.js';
      script.async = true;
      script.onerror = () => console.error('Failed to load animations');
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      {/* Top Bar with Date and Time */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <svg className="top-bar-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span id="currentDate">Loading...</span>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-item">
            <svg className="top-bar-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Philippines</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav id="navbar">
        <div className="logo">
          <img src="/LOGO2.png" alt="Nexxus Lab Logo" style={{ height: '40px', width: 'auto', display: 'block' }} />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#principles">Principles</a></li>
          <li><a href="#about">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="particles" id="particles"></div>
        <div className="hero-content">
          <h1>Leave the Tech to <span className="highlight">Us</span></h1>
          <p className="hero-subtitle">We design, build, and secure systems that support real business operations.</p>
          <p>No fluff. No bloated stacks. Clear execution from planning to deployment.</p>
          <div className="cta-buttons">
            <a href="#services" className="cta-button">Get Started</a>
            <a href="#about" className="cta-button secondary">Book a Call</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="particles" id="services-particles"></div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Nexxus Lab Philippines delivers IT Services through a tiered model built for clarity and control.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H5v-2h9v2zm0-3H5v-2h9v2zm0-3H5V9h9v2zm5 6h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V9h3v2z"/>
              </svg>
            </div>
            <h3>Mock-ups & Prototypes</h3>
            <p>We transform visions into experiences with our Mock-ups & Prototypes services. Our designers create detailed, interactive prototypes as blueprints for your projects. Each prototype guides development with clarity and precision.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
              </svg>
            </div>
            <h3>Software Development</h3>
            <p>Our developers craft cutting-edge web, hybrid, and native applications. We translate your needs into digital realities, ensuring each application fits your vision. Let us shape your digital future.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h3>Network Security</h3>
            <p>We offer comprehensive Network Security services to shield your enterprise from cyber threats. Our proactive approach ensures your business is safeguarded against digital intrusions. Trust us to protect your network and provide peace of mind.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>IT Support & Training</h3>
            <p>We offer top-tier technical support and industry-standard customer service through interactive webinars. Join us for support that elevates your potential in the digital landscape.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <h3>Automate Workflow</h3>
            <p>We specialize in cutting-edge AI services that automate processes, provide predictive analytics, and enhance customer experiences. Partner with us to unlock AI's transformative potential for your business.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <h3>AI Marketing Services</h3>
            <p>We offer cutting-edge AI services for smart automation, predictive analytics, and advanced data processing. Partner with us to transform your business with AI-driven strategies.</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="features" id="mission">
        <div className="particles" id="mission-particles"></div>
        <h2 className="section-title">Our Mission, Vision & Values</h2>
        <p className="section-subtitle">What drives Nexxus Lab</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>Nexxus Lab Philippines makes technology accessible by lowering entry barriers. We offer competitive, value-driven pricing without industry premiums, empowering companies and individuals to create their own tech solutions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>Nexxus Lab Philippines envisions a world where technology is accessible to all, empowering individuals and businesses. We drive innovation and progress for our clients and country.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <h3>Our Values</h3>
            <p>Nexxus Lab values open communication, integrity, and reliability. We foster an inclusive, empathetic work environment with mutual support and respect.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="particles" id="team-particles"></div>
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the leadership and talent driving Nexxus Lab</p>

        <div className="team-grid">
          <div className="team-card featured">
            <div className="team-photo-container">
              <img src="/chris.png" alt="Chris Bautista" className="team-photo" />
            </div>
            <div className="team-info">
              <h3>Chris Bautista</h3>
              <p className="team-role">Founder & Chief Executive Officer</p>
              <div className="team-description">
                <p>Chris leads Nexxus Lab Philippines with a technical and execution-first mindset. He oversees delivery quality, system design decisions, and client alignment, turning complex business requirements into high-performance systems.</p>
              </div>
              <div className="focus-areas">
                <span className="focus-tag">Software Development Oversight</span>
                <span className="focus-tag">Architecture Review</span>
                <span className="focus-tag">Client Scoping & Risk Control</span>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="team-photo-container">
              <img src="/team-photo.png" alt="OJT Intern 2026" className="team-photo" />
            </div>
            <div className="team-info">
              <h3>OJT Intern Team 2026</h3>
              <p className="team-role">Interns from DLSU-D & FEU-C</p>
              <p className="team-description">Our talented interns from DLSU-D & FEU-C brings fresh perspectives and innovative ideas, contributing to our dynamic and inclusive work environment through collaborative development and research.</p>
              <div className="focus-areas">
                <span className="focus-tag">UI Mockups and Prototypes</span>
                <span className="focus-tag">QA and Documentation</span>
                <span className="focus-tag">Internal Tooling Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Animated Slideshow */}
      <section className="portfolio-section" id="portfolio">
        <div className="particles" id="portfolio-particles"></div>
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Showcasing our successful projects</p>
        
        <div className="portfolio-slider-container">
          <div className="portfolio-slider" id="portfolioSlider">
            <div className="portfolio-slide active">
              <div className="portfolio-image-wrapper">
                <img src="/PFIP.png" alt="AIDefendBot" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>Philippine Financial & Inter-Industry Pride (PFIP)</h3>
                <p>Join PFIP to advance workplace equality and foster inclusive industry practices.</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <button className="portfolio-cta" data-project="aidefendbot">View Case Study</button>
              </div>
            </div>

            <div className="portfolio-slide">
              <div className="portfolio-image-wrapper">
                <img src="/MAVERS.png" alt="Mavers" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>Mavers Corporation</h3>
                <p>Connect with Mavers Corporation for authentic Filipino products and exceptional service.</p>
                <div className="portfolio-tags">
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>iOS & Android</span>
                </div>
                <button className="portfolio-cta" data-project="top100ai">View Case Study</button>
              </div>
            </div>

            <div className="portfolio-slide">
              <div className="portfolio-image-wrapper">
                <img src="/BAMBOO.png" alt="Bamboo Spa" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>Bamboo Spa</h3>
                <p>Relax the Filipino way, book your Bamboo Spa experience today.</p>
                <div className="portfolio-tags">
                  <span>Web Development</span>
                  <span>Online Booking</span>
                  <span>Spa Management</span>
                </div>
                <button className="portfolio-cta" data-project="bamboospa">View Case Study</button>
              </div>
            </div>

            <div className="portfolio-slide">
              <div className="portfolio-image-wrapper">
                <img src="/SCALE.png" alt="SCALE" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>SCALE</h3>
                <p>Be part of SCALE, get SOGIE certified and help create more inclusive spaces.</p>
                <div className="portfolio-tags">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>AI/ML</span>
                </div>
                <button className="portfolio-cta" data-project="scale">View Case Study</button>
              </div>
            </div>

            <div className="portfolio-slide">
              <div className="portfolio-image-wrapper">
                <img src="/MYCHAPTERS.png" alt="MYCHAPTERS" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>MyChapters</h3>
                <p>Unfold your next chapter with MyChapters.</p>
                <div className="portfolio-tags">
                  <span>Shopify</span>
                  <span>Stripe</span>
                  <span>Custom API</span>
                </div>
                <button className="portfolio-cta" data-project="mychapters">View Case Study</button>
              </div>
            </div>

            <div className="portfolio-slide">
              <div className="portfolio-image-wrapper">
                <img src="/FundRaising.png" alt="Fund Raising For Jedd" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>Fund Raising For Jedd</h3>
                <p>Support Jedd's journey. Help, share, and stand together.</p>
                <div className="portfolio-tags">
                  <span>Web App</span>
                  <span>Donation</span>
                  <span>Community</span>
                </div>
                <button className="portfolio-cta" data-project="fundraising">View Case Study</button>
              </div>
            </div>

            <div className="portfolio-slide">
              <div className="portfolio-image-wrapper">
                <img src="/MancaveSupplies.png" alt="Mancave Supplies PH" className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <h3>Mancave Supplies PH</h3>
                <p>Get stylish with rustic and industrial design—tell us what you need.</p>
                <div className="portfolio-tags">
                  <span>E-commerce</span>
                  <span>UI/UX</span>
                  <span>Web Design</span>
                </div>
                <button className="portfolio-cta" data-project="mancave">View Case Study</button>
              </div>
            </div>
          </div>

          <button className="portfolio-nav portfolio-prev" id="portfolioPrev">‹</button>
          <button className="portfolio-nav portfolio-next" id="portfolioNext">›</button>
          
          <div className="portfolio-dots" id="portfolioDots"></div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles" id="principles">
        <div className="particles" id="principles-particles"></div>
        <div className="principles-container">
          <h2 className="section-title">Core Principles</h2>
          <p className="section-subtitle">These principles guide how Nexxus Lab Philippines delivers IT Services.</p>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <path d="M12 17h.01"/>
                </svg>
              </div>
              <h3>Clarity Over Complexity</h3>
              <p>Work is defined before build starts. Requirements, timelines, and outputs stay visible.</p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Outcome-Driven Execution</h3>
              <p>Systems are built to support real operations. Features exist only if they solve a defined problem.</p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6v6H9z"/>
                  <path d="M9 3v6"/>
                  <path d="M15 3v6"/>
                </svg>
              </div>
              <h3>Technical Accountability</h3>
              <p>Every build has an owner. Decisions are documented. Trade-offs are explicit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Case Study Modal */}
      <div id="portfolioModal" className="portfolio-modal">
        <div className="portfolio-modal-content">
          <div className="portfolio-modal-header">
            <h2 id="modalTitle">Case Study</h2>
            <button id="modalClose" className="portfolio-modal-close">&times;</button>
          </div>
          <div className="portfolio-modal-body" id="modalContent">
            {/* Content will be dynamically inserted */}
          </div>
        </div>
      </div>

      {/* Automation Video Section */}
      <section className="automation-demo" id="automation">
        <div className="particles" id="automation-particles"></div>
        <h2 className="section-title">Sample of Basic Automation</h2>
        <p className="section-subtitle">See how we streamline workflows and save time</p>
        
        <div className="automation-video-container">
          <div className="automation-video-wrapper">
            <div className="scan-line-overlay">
              <div className="scan-line"></div>
            </div>
            <div className="video-aspect-container">
              <video 
                id="automation-video"
                className="automation-video hidden"
                controls
              >
                <source src="/SimpleAutomation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div id="video-thumbnail" className="video-thumbnail-container">
                <div className="thumbnail-overlay"></div>
                <button className="play-button-overlay" id="play-button">
                  <div className="play-button-wrapper">
                    <div className="play-button-pulse"></div>
                    <div className="play-button-circle">
                      <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
                <p className="play-demo-text">Click to play demo</p>
              </div>
            </div>
          </div>
          <div className="automation-description">
            <p>This demo showcases a basic automation workflow that eliminates repetitive tasks, reduces human error, and works around the clock. Imagine what custom automation can do for your business.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="particles" id="about-particles"></div>
        <div className="container">
          <h2 className="section-title">Book a Call</h2>
          <p className="section-subtitle">Have a project in mind? Let&apos;s build something great together.</p>
          
          <div className="about-content-wrapper">
            {/* Contact Form */}
            <div className="contact-form-container">
              <form id="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            {/* Calendly Widget */}
            <div className="calendly-widget-container">
              <div className="calendly-widget-header">
                <svg className="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <h3>Schedule a Meeting</h3>
              </div>
              <p className="calendly-description">Book a free consultation to discuss your project requirements and how we can help bring your vision to life.</p>
              
              <div className="calendly-benefits">
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>30-minute consultation</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Free project assessment</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Expert technical advice</span>
                </div>
              </div>

              <button id="calendly-book-btn" className="calendly-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book Your Call Now
              </button>

              <p className="calendly-note">You&apos;ll be redirected to our Calendly booking page</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/LOGO2.png" alt="Nexxus Lab" className="footer-logo-img" />
            <p>Software development, automation, security, and training.</p>
          </div>
          
          <div className="footer-nav">
            <h4>Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4>Resources</h4>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#principles">Principles</a></li>
              <li><a href="#about">Contact</a></li> 
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://www.facebook.com/nexxuslab" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V11H17l-.5 3h-2.8v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/nexxus-lab/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.8v2.3h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.2V24h-5V7z"/></svg>
            </a>
            <a href="https://www.instagram.com/nexxus_lab/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/></svg>
            </a>
          </div>

          <div className="footer-copyright">
            &copy; 2026 Nexxus Lab. All rights reserved.
          </div>

          <div className="footer-slogan">
            Leave the Tech to Us.
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <div className="chatbot-container">
        <button className="chatbot-button" id="chatbotToggle">💬</button>
        <div className="chatbot-window" id="chatbotWindow">
          <div className="chatbot-header">
            <h3>Nexxus Lab Assistant</h3>
            <button className="chatbot-close" id="chatbotClose">×</button>
          </div>
          <div className="chatbot-messages" id="chatbotMessages">
            <div className="message bot">
              👋 Hello! I&apos;m your Nexxus Lab assistant. How can I help you today?
            </div>
          </div>
          <div className="chatbot-input-container">
            <input type="text" className="chatbot-input" id="chatbotInput" placeholder="Type your message..." />
            <button className="chatbot-send" id="chatbotSend">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
