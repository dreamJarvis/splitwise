import React, { Component } from "react";
import { connect } from "react-redux";
import './Modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import UserBackendAPIService from "../../../services/UserBackendAPIService";

class Modal extends Component {
    state = {
        updatedUserName : this.props.userInfo.name,
        updatedUserPhoneNumber: this.props.userInfo.phone,
        UserEmail: this.props.email
    };

    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "10%",
            endingTop: "15%"
        };
        M.Modal.init(this.Modal, options);
    }

    setValues = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    updateChanges = ()=>{
        console.log('updated user name : ', this.state.updatedUserName);
        console.log('updated user number : ', this.state.updatedUserPhoneNumber);
        UserBackendAPIService.updateUserDetails({
            user : this.props.userInfo.id,
            currency : this.props.userInfo.currency,
            phone : this.state.updatedUserPhoneNumber,
            name : this.state.updatedUserName,
            password : this.props.userInfo.password,
            language : this.props.userInfo.language,
            timezone : this.props.userInfo.timezone
        }).then(({data, success})=>{
            if(success){
                console.log('data : ',data);
            }
        });
    }

    render() {
        return (
            <div>
                <div ref={Modal => {
                    this.Modal = Modal;
                }}
                     id="userInfoUpdateModal"
                     className="modal"
                >
                    <div className="modal-content right-align">
                        <div className="modal-title center-align">
                            <h5 className="row orange-text text-darken-2">Update user values</h5>
                        </div>
                        <div className="row right-align">
                            <div className="input-field col m12 s12">
                                <div className="input-field col m12 s12">
                                    <label htmlFor="updatedUserName">User name</label>
                                    <input value={this.state.updatedUserName} id="updatedUserName" type="text" className="validate center-align" onChange={this.setValues}/>
                                </div>
                                <div className="input-field col m12 s12">
                                    <label htmlFor="updatedUserPhoneNumber">User name</label>
                                    <input value={this.state.updatedUserPhoneNumber} id="updatedUserPhoneNumber" type="email" className="validate center-align" onChange={this.setValues}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer center-align">
                        <a className="modal-close btn btn-danger" onClick={this.updateChanges}>
                            Apply changes
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        userInfo : state.userState.user
    }
};

export default connect(mapStateToProps, null)(Modal);
