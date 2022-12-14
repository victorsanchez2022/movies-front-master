import "./Footer.css";

import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        Todos los derechos reservados @2022
        <p>prohibida la reproduccion total o parcial de los contenidos de este sitio.</p>
      </div>
    );
  }
}

export default Footer;
