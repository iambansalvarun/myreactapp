
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Address from "./Address"
export default class Contact extends PureComponent {
    
    
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div id="contact"> 
            <h2>Contact Us</h2>
<Address branchoffice="612 Park Centra , Sector 30

Gurgaon 122002 Haryana

 +91 (0124) 470 0200
 infoindia@xebia.com"   headoffice="3rdFloor Wing A, Indiqube Alpha Building, Panathur Junction, Marathahalli, Sarjapur Outer Ring Road

 Bangalore - 560103, Karnataka
 
  + 91 080 4662 2200
  infoindia@xebia.com" />
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}

