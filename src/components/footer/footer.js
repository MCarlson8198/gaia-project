import React from 'react';
import './footer.css';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Footer = () =>{
  /**
   * Footer component
   * There was no footer on the image in the challenge,
   * so mocked up a mimic of the Gaia.com home page footer
   */
  return(
    <div className="footer__body">
      <div className="top__plate">
        <ul className="top__list">
          <li className="top--title">Gaia</li>
          <li className="top__item"><a href="https://www.gaia.com/lp/about/" target="_blank" rel="noopener noreferrer">About Gaia</a></li>
          <li className="top__item"><a href="https://gaiasupportcenter.zendesk.com/hc/en-us/articles/223618027-Which-devices-can-I-use-to-stream-Gaia-" target="_blank" rel="noopener noreferrer">Devices</a></li>
          <li className="top__item"><a href="https://www.gaia.com/terms-privacy#community-posting-guidelines" target="_blank" rel="noopener noreferrer">Community Guidelines</a></li>
          <li className="top__item"><a href="https://www.gaia.com/terms-privacy" target="_blank" rel="noopener noreferrer">Terms of Use and Privacy</a></li>
          <li className="top__item"><a href="https://www.gaia.com/terms-privacy#anti-spam-policy" target="_blank" rel="noopener noreferrer">Spam Policy</a></li>
          <li className="top__item"><a href="https://www.gaia.com/lp/article-sitemap/" target="_blank" rel="noopener noreferrer">Articles Sitemap</a></li>
        </ul>
        <ul className="top__list">
          <li className="top--title">Community</li>
          <li className="top__item"><a href="https://gaiasupportcenter.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">Help Center</a></li>
          <li className="top__item"><a href="https://www.gaia.com/lp/careers/" target="_blank" rel="noopener noreferrer">Careers</a></li>
          <li className="top__item"><a href="https://www.gaia.com/lp/write-for-gaia/" target="_blank" rel="noopener noreferrer">Write for Gaia</a></li>
        </ul>
        <ul className="top__list">
          <li className="top--title">More From Gaia</li>
          <li className="top__item"><a href="https://www.spiritualcinemacircle.com/" target="_blank" rel="noopener noreferrer">Spiritual Cinema Circle</a></li>
          <li className="top__item"><a href="https://ir.gaia.com/" target="_blank" rel="noopener noreferrer">Investor Relations</a></li>
        </ul>
        <ul className="top__list">
          <li className="top--title">My Language</li>
          <li className="lang-select-plate">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>English</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">English</option>
                <option value="other">Espanol</option>
                <option value="other">Deutsch</option>
              </FormControl>
            </FormGroup>
          </li>
        </ul>
      </div>
      <div className="bottom__plate">
        <div className="bottom--title">Connect with us</div>
        <div className="bottom__icon--plate">
          <a href="https://www.facebook.com/gaia" target="_blank" rel="noopener noreferrer"><div className="fb--icon icon"></div></a>
          <a href="https://www.twitter.com/JoinGaia" target="_blank" rel="noopener noreferrer"><div className="twitter--icon icon"></div></a>
          <a href="https://www.instagram.com/wearegaia/" target="_blank" rel="noopener noreferrer"><div className="insta--icon icon"></div></a>
          <a href="https://www.youtube.com/user/gaiamtv" target="_blank" rel="noopener noreferrer"><div className="youtube--icon icon"></div></a>
          <a href="https://www.pinterest.com/wearegaia/" target="_blank" rel="noopener noreferrer"><div className="pinterest--icon icon"></div></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
