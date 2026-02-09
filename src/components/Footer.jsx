import React from 'react'

export default function Footer(props) {
  return (
<footer className="footer">

        <img src={props.img} alt={props.alt}
        className="wave-divider"/>
        <div className="content-container">
            <div className="main-grid">
                
                <div>
                    <div className="logo-container">
                        <div className="logo-icon">
                            <div className="logo-icon-text">{props.logo_icon_text}</div>
                        </div>
                        <div>
                            <h3 className="logo-text">{props.logo_text}</h3>
                            <p className="logo-sub-text">{props.logo_subtext}</p>
                        </div>
                    </div>
                    
                    <p className="description-text">
                        {props.description}
                    </p>
                    
                    <div className="gov-badge">
                        <img src={props.gov_image} alt={props.gov_alt} clasNames="gov-icon-wrapper"/>
                        <div>
                            <p className="gov-text-main">{props.gov_text}</p>
                            <p className="gov-text-sub">{props.gov_sub_text}</p>
                        </div>
                    </div>
                    
                    <div className="social-buttons">
                        <button className="social-button" aria-label="Facebook">
                            <img src="facebook_logo.png" alt="Facebook Icon" className="social-icon"/>
                        </button>
                        <button className="social-button" aria-label="Twitter">
                            <img src="twitter_logo.png" alt="Twitter Icon" className="social-icon"/>
                        </button>
                        <button className="social-button" aria-label="Instagram">
                            <img src="instagram_logo.png" alt="Instagram Icon" className="social-icon"/>
                        </button>
                        <button className="social-button" aria-label="YouTube">
                            <img src="youtube_logo.png" alt="YouTube Icon" className="social-icon"/>
                        </button>
                    </div>
                </div>
                
                <div>
                    <h4 className="link-heading">{props.quick_links}</h4>
                    <ul className="link-list">
                        <li><a href="/">{props.link1}</a></li>
                        <li><a href="/">{props.link2}</a></li>
                        <li><a href="/">{props.link3}</a></li>
                        <li><a href="/">{props.link4}</a></li>
                        <li><a href="/">{props.link5}</a></li>
                        <li><a href="/">{props.link6}</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="link-heading">{props.quick_links2}</h4>
                    <ul className="link-list">
                        <li><a href="/">{props.link2_1}</a></li>
                        <li><a href="/">{props.link2_2}</a></li>
                        <li><a href="/">{props.link2_3}</a></li>
                        <li><a href="/">{props.link2_4}</a></li>
                        <li><a href="/">{props.link2_5}</a></li>
                        <li><a href="/">{props.link2_6}</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="link-heading">{props.support_links}</h4>
                    <ul className="link-list link-list-long">
                        <li><a href="/">{props.suplinks1}</a></li>
                        <li><a href="/">{props.suplinks2}</a></li>
                        <li><a href="/">{props.suplinks3}</a></li>
                        <li><a href="/">{props.suplinks4}</a></li>
                        <li><a href="/">{props.suplinks5}</a></li>
                        <li><a href="/">{props.suplinks6}</a></li>
                    </ul>
                    
                    <div className="contact-group">
                        <div className="contact-item">
                            <img src="https://via.placeholder.com/20/F87171?text=📍" alt="Location Pin"/>
                            <span>Ranchi, Jharkhand</span>
                        </div>
                        <div className="contact-item">
                            <img src="https://via.placeholder.com/20/4ADE80?text=📞" alt="Phone Icon"/>
                            <span>+91 651 2490134</span>
                        </div>
                        <div className="contact-item">
                            <img src="https://via.placeholder.com/20/60A5FA?text=📧" alt="Mail Icon"/>
                            <span>tourism@jharkhand.gov.in</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="newsletter-section">
                <div className="newsletter-inner">
                    <h4 className="link-heading">Stay Connected</h4>
                    <p className="description-text">{props.newsletter}</p>
                    <div className="newsletter-content">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button className="newsletter-button">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="copyright-section">
                <div className="copyright-text">
                    {props.copyright}
                    <span className="copyright-highlight">{props.copyright_highlight}</span>
                </div>
                <div Name="made-with-love">
                    <span>Made with</span>
                    <img src="heart_logo.png" alt="Heart icon"/>
                    <span>{props.lo_text}</span>
                </div>
            </div>
        </div>Name
    </footer>
  )
}
