import React from 'react';
import "./style/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHub from "@material-ui/icons/GitHub"
function Footer() {
  return (
    <footer>
      <div className="logo"><b>Logo</b></div>
   
      <div className="social-media-icons">
        <h3>
        <LinkedInIcon/>
        <GitHub/>
        </h3>
      </div>
      <div className="contact-info">
     <h6>Ph:123456789</h6>
       
      </div>
    </footer>
  );
}

export default Footer;
