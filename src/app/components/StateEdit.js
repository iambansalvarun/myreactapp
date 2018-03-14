import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class StateEdit extends PureComponent {

    constructor(props) {

        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        //     this.state = {mystate:{
        //         id:[this.props.state.id],
        //         code:[this.props.state.code],
        //         name:[this.props.state.name]
        //     }
        // }
        // this.state:({ mystate:this.props.state}
        // })
    }


    handleChange(e) {
        // e.preventDefault();

        let { name, value } = e.target;
        let mystate = Object.assign({},
            this.props.state,
            { [name]: value });

            this.props.updateState(mystate);
        // mystate: Object.assign({},this.state.mystate,{[name]: value})


       


        // let{name,value}=e.target;
        // this.setState({state:{
        //     [name]:e.target.value}}
        // )

        // this.props.updateState(updatedState);


    }

    handleSubmit(e) {
        e.preventDefault();
        //         let id = this.props.match.params.id;
        //         let name =this.state.statename;
        //         let code =this.state.statecode;

        // let updatedState=({
        //     id:this.props.match.params.id,
        //     name:this.state.statename,
        //     code:this.state.statecode,
        // });

        this.props.saveUpdatedState(this.props.state);
        alert("state "+ this.props.state.id +" successfully updated");

    }


    componentWillMount() {


        let id = this.props.match.params.id;

        if (id) {
            this.props.getStateById(id);
        }

        //         this.setState({
        // mystate:this.props.state
        //      })

    }


    render() {

        let mystate = this.props.state || [];
        let status = this.props.status;
        let error = this.props.error;

        if (status) {
            return (


                <div id="statesloader">
                    <h2>Loading .....</h2>
                    <img src="/assets/loading.gif" />
                </div>


            )


        }

        return (
            <div id="stateedit">
            <h2>Update State</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <table>
                        <tbody>

                            <tr>
                                <td><b>State Id</b></td>
                                <td>{mystate.id}</td></tr>

                            <tr>
                                <td><b>State Code</b> </td>
                                <td>
                                    <input name="code" onChange={(e) => this.handleChange(e)} value={mystate.code} />
                                </td></tr>

                            <tr>
                                <td><b>State Name</b></td>
                                <td>
                                    <input name="name" onChange={(e) => this.handleChange(e)} value={mystate.name} />

                                </td></tr>


                            
                                    <input className="updatebutton" type="submit" value="Update" />
                               
                        </tbody>
                    </table>
                </form>

            </div>


        )




    }


}


StateEdit.defaultProps = {

}

StateEdit.propTypes = {

}





