import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {


    render() {

        return (
           <footer className="footer">
               <button onClick={this.props.onclick} className="footer__clear-btn">Clear</button>
               <button className="footer__save-btn">Save Changes</button>
           </footer>
        );
    }


}

export default Footer;