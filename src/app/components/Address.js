import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Address extends PureComponent {

constructor(props){

    super(props);
}

    render() {

        return (

            <div id="address">
                <table><tbody>
                    <tr>
                        <td  width="10%">
                            Branch Office
</td><td width="20%" height="100px">
                            {this.props.branchoffice}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           Head Office
</td><td>
                            {this.props.headoffice}
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

        )
    }



}
Address.defaultProps = {

}

Address.propTypes = {

}
