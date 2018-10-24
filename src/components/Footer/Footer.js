import React from "react";
import "./Footer.css";

const Footer = props => (
    // <div>
    //     <ul className="nav nav-bar justify-content-center">
    //         <li><a href="/">Clicky Game</a></li>
    //         <li className={props.message.indexOf('incorrectly') !== -1 ?
    //             "desc-incorrect":
    //             props.message.indexOf('correctly') !== -1 ?
    //                 "desc-correct" :
    //                 "desc-normal"}
    //         >
    //             {props.message}
    //         </li>
    //         <li>Score: <span>{props.curScore}</span> | Top Score: {props.topScore}</li>
    //     </ul>
    // </div>

    <div className="footer footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
    </div>
);

export default Footer;