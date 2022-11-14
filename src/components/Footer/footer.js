import React from "react";
// import logo from "./logoFooter.png";
// import logo from './logoqatar.jpg'

function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white">
      <div className="container row p-5 pb-2 ">
        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className='fs-40'>Complejo Los Teros</p>
          {/* <img alt="logoqatar" src={logo} /> */}
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h5 mb-3">Links</p>
          <div className="mb-1">
            <a
              className="text-secondary text-decoration-none "
              href="/terminos"
            >
              Terms and Condition
            </a>
          </div>
          <div className="mb-1">
            <a className="text-secondary text-decoration-none " href="/privacy">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h5 mb-3">Contacto</p>
          <div className="mb-1">
            <a className="text-secondary text-decoration-none "  target='_blank' href="https://wa.me/3426310014">
              WhatsApp
            </a>
          </div>
          <div className="mb-1">
            <a className="text-secondary text-decoration-none" target='_blank' href="https://instagram.com/losteroscomplejo?igshid=YmMyMTA2M2Y=">
              Instagram
            </a>
          </div>
        </div>
        <div className="col-xs-12 pt-4">
          <p className="text-white text-center">
            Copyright - All rights reserved © 2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
