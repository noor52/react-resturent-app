import React, { Component } from "react";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import './Util.jsx';
import TextInput from "../MediamForm/TextInput";
import validate from "../MediamForm/validate";
// import TextArea from '../MediamForm/TextArea';
// import Email from "../MediamForm/Email";
// import Select from "../MediamForm/Select";
// import Radio from '../MediamForm/Radio';
// import Checkbox from "../MediamForm/Checkbox";
// import NoValidateText from "../MediamForm/NoValidateText";
// import Datetpye from "../MediamForm/DateType";

import "./style.css";

class Prectise extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,

      //   formControls2: {
      //     name: {
      //       value: "",
      //       placeholder: "What is your name",
      //       valid: false,
      //       validationRules: {
      //         minLength: 4,
      //         isRequired: true,
      //       },
      //       touched: false,
      //     },

      // passportAuthor: {
      //   value: "",
      //   placeholder: "What is your passportAuthor",
      //   valid: false,
      //   validationRules: {
      //     minLength: 4,
      //     isRequired: true,
      //   },
      //   touched: false,
      // },
      //   },

      formControls: {
        // name: {
        //   value: "",
        //   placeholder: "What is your name",
        //   valid: false,
        //   validationRules: {
        //     minLength: 4,
        //     isRequired: true,
        //   },
        //   touched: false,
        //   },
        spouseNid: {
          value: "",
          placeholder: "What is your spouseNid",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
      },
    };
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls2,
    };
    const updatedFormElement = {
      ...updatedControls[name],
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    // updatedFormElement.valid = updatedFormElement.NoValidateText;
    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      //   formIsValid = updatedControls[inputIdentifier] && formIsValid;

      formIsValid =
        // updatedControls[inputIdentifier].NoValidateText ||
        // updatedControls[inputIdentifier].spouseName ||
        // updatedControls[inputIdentifier].spouseNid ||
        // updatedControls[inputIdentifier].spouseWorkPlace ||
        // updatedControls[inputIdentifier].spouseOcopation ||
        // updatedControls[inputIdentifier].Checkbox ||
        // updatedControls[inputIdentifier].nidNo;
        updatedControls[inputIdentifier].valid && formIsValid;
      //   formIsValid = updatedControls[inputIdentifier].NoValidateText;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  };

  changeHandler2 = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls2,
    };
    const updatedFormElement = {
      ...updatedControls[name],
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    // updatedFormElement.valid = updatedFormElement.NoValidateText;
    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      //   formIsValid = updatedControls[inputIdentifier] && formIsValid;

      formIsValid =
        // updatedControls[inputIdentifier].NoValidateText ||
        // updatedControls[inputIdentifier].spouseName ||
        // updatedControls[inputIdentifier].spouseNid ||
        // updatedControls[inputIdentifier].spouseWorkPlace ||
        // updatedControls[inputIdentifier].spouseOcopation ||
        // updatedControls[inputIdentifier].Checkbox ||
        // updatedControls[inputIdentifier].nidNo;
        updatedControls[inputIdentifier].valid && formIsValid;
      //   formIsValid = updatedControls[inputIdentifier].NoValidateText;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  };
  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls2) {
      formData[formElementId] = this.state.formControls2[formElementId].value;
      //   formData[formElementId] = this.state.formControls.drivingLicNo.value;
    }

    console.dir(formData);
  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert(
      "You are submitting " +
        // this.state.formControls.name.value +
        "Id" +
        this.state.formControls2.passportNo.value +
        "name"
    );
  };

  render() {
    return (
      <div className="Try">
        <form action="#" id="js-form" onSubmit={this.mySubmitHandler}>
          <div class="container">
            <div class="row">
              <h5>ব্যাক্তিগত তথ্য</h5>
            </div>

            {/* <div class="row">
              <div class="col-sm-1">
                <label for="name">নাম(বাংলায়)</label>
              </div> */}
            {/* <div class="col-sm-5">
                <TextInput
                  name="name"
                  placeholder={this.state.formControls.name.placeholder}
                  value={this.state.formControls.name.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.name.touched}
                  valid={this.state.formControls.name.valid}
                />
              </div>
            </div> */}

            <div class="row">
              <div class="col-sm-12">
                <h5>পাসপোর্ট এর তথ্য</h5>
                <p>
                  <hr />
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="spouseNid"> পাসপোর্ট নম্বর </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="spouseNid"
                  placeholder={this.state.formControls.spouseNid.placeholder}
                  value={this.state.formControls.spouseNid.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.spouseNid.touched}
                  valid={this.state.formControls.spouseNid.valid}
                />
              </div>
            </div>

            {/* <div class="row">
              <div class="col-sm-1">
                <label for="passportAuthor"> পাসপোর্ট প্রধানের কতৃপক্ষ </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="passportAuthor"
                  value={this.state.formControls.passportAuthor.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.passportAuthor.options}
                  touched={this.state.formControls.passportAuthor.touched}
                  valid={this.state.formControls.passportAuthor.valid}
                />
              </div> */}

            <button
              onClick={this.formSubmitHandler}
              disabled={!this.state.formIsValid}
              class="btn btn-danger"
            >
              Submit
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    );
  }
}

export default Prectise;
