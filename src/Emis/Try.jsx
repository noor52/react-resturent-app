import React, { Component } from "react";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import './Util.jsx';
import TextInput from "../MediamForm/TextInput";
import validate from "../MediamForm/validate";
// import TextArea from '../MediamForm/TextArea';
import Email from "../MediamForm/Email";
import Select from "../MediamForm/Select";
// import Radio from '../MediamForm/Radio';
import Checkbox from "../MediamForm/Checkbox";
import NoValidateText from "../MediamForm/NoValidateText";
import Datetpye from "../MediamForm/DateType";

import "./style.css";

class Try extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,

      formControls2: {
        priviosPassportNo: {
          value: "",
          placeholder: "What is your priviosPassportNo",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        passportAuthor: {
          value: "",
          placeholder: "What is your passportAuthor",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
      },

      passportNo: {
        value: "",
        placeholder: "What is your passportNo",
        valid: false,
        validationRules: {
          minLength: 4,
          isRequired: true,
        },
        touched: false,
      },

      formControls: {
        name: {
          value: "",
          placeholder: "What is your name",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        id: {
          value: "",
          placeholder: "What is your id",
          valid: false,
          validationRules: {
            minLength: 6,
            isRequired: true,
          },
          touched: false,
        },
        enName: {
          value: "",
          placeholder: "What is your enName",
          valid: false,
          validationRules: {
            minLength: 3,
            isRequired: true,
          },
          touched: false,
        },
        nidNo: {
          value: "",
          placeholder: "What is your nidNo",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        etis: {
          value: "",
          placeholder: "What is your etis",
          valid: false,
          validationRules: {
            minLength: 3,
            isRequired: true,
          },
          touched: false,
        },
        mobileNo: {
          value: "",
          placeholder: "What is your mobileNo",
          valid: false,
          validationRules: {
            minLength: 11,
            isRequired: true,
          },
          touched: false,
        },
        drivingLicNo: {
          value: "",
          placeholder: "What is your drivingLicNo",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        pensionFundNo: {
          value: "",
          placeholder: "What is your pensionFundNo",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        my_email: {
          value: "",
          placeholder: "What is your email",
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true,
          },
          touched: false,
        },
        fathersName: {
          value: "",
          placeholder: "What is your fathersName",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        mothersName: {
          value: "",
          placeholder: "What is your mothersName",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        //date
        dob: {
          value: "",
          placeholder: "What is your birth date",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        passportExpairDate: {
          value: "",
          placeholder: "What is your passportExpairDate	",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        passportDelibaryDate: {
          value: "",
          placeholder: "What is your birth passportDelibaryDate",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },

        spouseName: {
          value: "",
          placeholder: "What is your spouseName",
          valid: false,
          validationRules: {
            // minLength: 4,
            // notRequired: true
          },
          touched: false,
        },
        spouseNid: {
          value: "",
          placeholder: "What is your spouseNid",
          valid: false,
          validationRules: {
            // minLength: 4,
            notRequired: true,
          },
          touched: false,
        },
        spouseWorkPlace: {
          value: "",
          placeholder: "What is your spouseWorkPlace",
          valid: false,
          validationRules: {
            // minLength: 4,
            notRequired: true,
          },
          touched: false,
        },
        // passportNo: {
        //   value: "",
        //   placeholder: "What is your passportNo",
        //   valid: false,
        //   validationRules: {
        //     minLength: 4,
        //     isRequired: true,
        //   },
        //   touched: false,
        // },

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
        // priviosPassportNo: {
        //   value: "",
        //   placeholder: "What is your priviosPassportNo",
        //   valid: false,
        //   validationRules: {
        //     minLength: 4,
        //     isRequired: true,
        //   },
        //   touched: false,
        // },
        gender: {
          value: "",
          placeholder: "What is your gender",
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: "male", displayValue: "Male" },
            { value: "female", displayValue: "Female" },
          ],
        },
        religon: {
          value: "",
          placeholder: "What is your religon",
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: "islam", displayValue: "islam-ইসলাম" },
            { value: "hindu", displayValue: "hindu-হিন্দু" },
            { value: "buddo", displayValue: "buddo-বুদ্ধ" },
            { value: "cristan", displayValue: "cristan-খ্রিশ্চান" },
            { value: "others", displayValue: "others" },
          ],
        },
        marriageStatus: {
          value: "",
          placeholder: "What is your marriageStatus",
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: "married", displayValue: "বিবাহিত" },
            { value: "unmarried", displayValue: "অবিবাহিত" },
            { value: "single", displayValue: "সিংগেল" },
          ],
        },
        spouseOcopation: {
          value: "",
          placeholder: "What is your spouseOcopation",
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: "govJob", displayValue: "সরকারি চাকরী" },
            { value: "pribateJob", displayValue: "বেসরকারী চাকরী" },
            { value: "business", displayValue: "ব্যবসা" },
          ],
        },

        fridomFighter: {
          value: "",
          placeholder: "Are you a  fridomFighter",
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [{ value: 1 }],

          // },
          // fridomFighter: {
          //     value: '',
          //     placeholder: 'Are you a frontend developer',
          //     valid: false,
          //     touched: false,
          //     validationRules: {
          //         isRequired: true,
          //     },
          //     options: [
          //         { value: 0, displayValue: 'No' },
          //         { value: 1, displayValue: 'Yes' }
          //     ]
          // spouseName: {
          //     value: '',
          //     placeholder: 'What is your spous Name',
          //     valid: false,
          //     validationRules: {
          //         // minLength: 4,
          //         isRequired: false
          //     },
          //     touched: false
          //     // },
          // my_radio: {
          //     value: '',
          //     placeholder: 'Are you a frontend developer',
          //     valid: false,
          //     touched: false,
          //     validationRules: {
          //         // isRequired: true,
          //     },
          //     options: [
          //         { value: 0, displayValue: 'No' },
          //         { value: 1, displayValue: 'Yes' }
          //     ]
        },
      },
    };
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.button ? "warning" : "primary";
    return classes;
  }
  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls,
    };
    const updatedFormElement = {
      ...updatedControls[name],
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid =
      validate(value, updatedFormElement.validationRules) ||
      updatedFormElement.nidNo;

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
    updatedFormElement.valid =
      validate(value, updatedFormElement.validationRules) ||
      updatedFormElement.nidNo;

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
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
      //   formData[formElementId] = this.state.formControls.drivingLicNo.value;
    }

    console.dir(formData);
  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert(
      "You are submitting " +
        this.state.formControls.name.value +
        "Id" +
        this.state.formControls.id.value +
        "name" +
        this.state.formControls.enName.value +
        this.state.formControls.fridomFighter.value
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

            <div class="row">
              <div class="col-sm-1">
                <label for="id"> আইডি</label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="id"
                  placeholder={this.state.formControls.id.placeholder}
                  value={this.state.formControls.id.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.id.touched}
                  valid={this.state.formControls.id.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="enName">নাম (ইংরেজিতে)</label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="enName"
                  placeholder={this.state.formControls.enName.placeholder}
                  value={this.state.formControls.enName.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.enName.touched}
                  valid={this.state.formControls.enName.valid}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="name">নাম(বাংলায়)</label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="name"
                  placeholder={this.state.formControls.name.placeholder}
                  value={this.state.formControls.name.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.name.touched}
                  valid={this.state.formControls.name.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="nidNo">জাতীয় পরিচয়পত্র নং(এনআইডি)</label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="nidNo"
                  placeholder={this.state.formControls.nidNo.placeholder}
                  value={this.state.formControls.nidNo.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.nidNo.touched}
                  valid={this.state.formControls.nidNo.valid}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="etis">ইটিআইএস </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="etis"
                  placeholder={this.state.formControls.etis.placeholder}
                  value={this.state.formControls.etis.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.etis.touched}
                  valid={this.state.formControls.etis.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="mobileNo">মোবাইল নং </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="mobileNo"
                  placeholder={this.state.formControls.mobileNo.placeholder}
                  value={this.state.formControls.mobileNo.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.mobileNo.touched}
                  valid={this.state.formControls.mobileNo.valid}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <label for="name">ইমেইল </label>
              </div>
              <div class="col-sm-5">
                <Email
                  name="my_email"
                  placeholder={this.state.formControls.my_email.placeholder}
                  value={this.state.formControls.my_email.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.my_email.touched}
                  valid={this.state.formControls.my_email.valid}
                />
              </div>

              <div class="col-sm-1">
                <label for="drivingLicNo">ড্রাইভিং লাইসেন্স নং </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="drivingLicNo"
                  placeholder={this.state.formControls.drivingLicNo.placeholder}
                  value={this.state.formControls.drivingLicNo.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.drivingLicNo.touched}
                  valid={this.state.formControls.drivingLicNo.valid}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="dob">জন্মতারিখ </label>
              </div>
              <div class="col-sm-5">
                <Datetpye
                  name="dob"
                  placeholder={this.state.formControls.dob.placeholder}
                  value={this.state.formControls.dob.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.dob.touched}
                  valid={this.state.formControls.dob.valid}
                />
              </div>

              <div class="col-sm-1">
                <label for="name">ভবিষ্য তহবিল নং </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="pensionFundNo"
                  placeholder={
                    this.state.formControls.pensionFundNo.placeholder
                  }
                  value={this.state.formControls.pensionFundNo.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.pensionFundNo.touched}
                  valid={this.state.formControls.pensionFundNo.valid}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h5>পারিবারিক তথ্য</h5>
                <p>
                  <hr />
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="fathersName">বাবার নাম </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="fathersName"
                  placeholder={this.state.formControls.fathersName.placeholder}
                  value={this.state.formControls.fathersName.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.fathersName.touched}
                  valid={this.state.formControls.fathersName.valid}
                />
              </div>

              <div class="col-sm-1">
                <label for="mothersName">মায়ের নাম </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="mothersName"
                  placeholder={this.state.formControls.mothersName.placeholder}
                  value={this.state.formControls.mothersName.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.mothersName.touched}
                  valid={this.state.formControls.mothersName.valid}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <label for="religon">ধর্ম </label>
              </div>
              <div class="col-sm-5">
                <Select
                  name="religon"
                  value={this.state.formControls.religon.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.religon.options}
                  touched={this.state.formControls.religon.touched}
                  valid={this.state.formControls.religon.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="gender">লিঙ্গ </label>
              </div>
              <div class="col-sm-5">
                <Select
                  name="gender"
                  value={this.state.formControls.gender.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.gender.options}
                  touched={this.state.formControls.gender.touched}
                  valid={this.state.formControls.gender.valid}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="marriageStatus"> বৈবাহিক অবস্থা </label>
              </div>
              <div class="col-sm-5">
                <Select
                  name="marriageStatus"
                  value={this.state.formControls.marriageStatus.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.marriageStatus.options}
                  touched={this.state.formControls.marriageStatus.touched}
                  valid={this.state.formControls.marriageStatus.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="spouseName">স্বামী/স্ত্রীর নাম </label>
              </div>
              <div class="col-sm-5">
                <NoValidateText
                  name="spouseName"
                  placeholder={this.state.formControls.spouseName.placeholder}
                  value={this.state.formControls.spouseName.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.spouseName.touched}
                  valid={this.state.formControls.spouseName.valid}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-1">
                <label for="spouseOcopation"> স্বামী/স্ত্রীর পেশা </label>
              </div>
              <div class="col-sm-5">
                <Select
                  name="spouseOcopation"
                  value={this.state.formControls.spouseOcopation.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.spouseOcopation.options}
                  touched={this.state.formControls.spouseOcopation.touched}
                  valid={this.state.formControls.spouseOcopation.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="spouseNid">
                  স্বামী/স্ত্রীর জাতীয় পরিচ্যপত্র নম্বর{" "}
                </label>
              </div>
              <div class="col-sm-5">
                <NoValidateText
                  name="spouseNid"
                  placeholder={this.state.formControls.spouseNid.placeholder}
                  value={this.state.formControls.spouseNid.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.spouseNid.touched}
                  valid={this.state.formControls.spouseNid.valid}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <label for="spouseWorkPlace">
                  {" "}
                  স্বামী/স্ত্রীর কর্মস্থল (প্রযোজ্য ক্ষেত্রে){" "}
                </label>
              </div>
              <div class="col-sm-5">
                <NoValidateText
                  name="spouseWorkPlace"
                  value={this.state.formControls.spouseWorkPlace.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.spouseWorkPlace.options}
                  touched={this.state.formControls.spouseWorkPlace.touched}
                  valid={this.state.formControls.spouseWorkPlace.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="fridomFighter">
                  {" "}
                  মুক্তিযোদ্ধা বা মুক্তিযোদ্ধা পোষ্য কিনা?
                </label>
              </div>
              <div class="col-sm-1">
                <Checkbox
                  name="fridomFighter"
                  placeholder={
                    this.state.formControls.fridomFighter.placeholder
                  }
                  value={this.state.formControls.fridomFighter.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.fridomFighter.options}
                  touched={this.state.formControls.fridomFighter.touched}
                  valid={this.state.formControls.fridomFighter.valid}
                />
              </div>
              <div class="col-sm-4"></div>
            </div>

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
                <label for="passportNo"> পাসপোর্ট নম্বর </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="passportNo"
                  value={this.state.formControls2.passportNo.value}
                  onChange={this.changeHandler2}
                  options={this.state.formControls2.passportNo.options}
                  touched={this.state.formControls2.passportNo.touched}
                  valid={this.state.formControls2.passportNo.valid}
                />
              </div>
              <div class="col-sm-1">
                <label for="passportDelibaryDate">
                  {" "}
                  পাসপোর্ট প্রদানের তারিখ{" "}
                </label>
              </div>
              <div class="col-sm-5">
                <Datetpye
                  name="passportDelibaryDate"
                  value={this.state.formControls.passportDelibaryDate.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.passportDelibaryDate.options}
                  touched={this.state.formControls.passportDelibaryDate.touched}
                  valid={this.state.formControls.passportDelibaryDate.valid}
                />
              </div>
            </div>
            <div class="row">
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
              </div>
              <div class="col-sm-1">
                <label for="passportExpairDate"> মেয়াদ উত্তীর্ণের তারিখ </label>
              </div>
              <div class="col-sm-5">
                <Datetpye
                  name="passportExpairDate"
                  value={this.state.formControls.passportExpairDate.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.passportExpairDate.options}
                  touched={this.state.formControls.passportExpairDate.touched}
                  valid={this.state.formControls.passportExpairDate.valid}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <label for="priviosPassportNo">
                  {" "}
                  পূর্ববর্তী পাসপোর্ট নম্বর{" "}
                </label>
              </div>
              <div class="col-sm-5">
                <TextInput
                  name="priviosPassportNo"
                  value={this.state.formControls.priviosPassportNo.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.priviosPassportNo.options}
                  touched={this.state.formControls.priviosPassportNo.touched}
                  valid={this.state.formControls.priviosPassportNo.valid}
                />
              </div>
              <div class="col-sm-1">
                {/* <label for="fridomFighter"> FridomFighter</label> */}
              </div>
              <div class="col-sm-5">
                {/* <Checkbox name="fridomFighters"
                                value={this.state.formControls.fridomFighters.value}
                                onChange={this.changeHandler}
                                options={this.state.formControls.passportNo.options}
                                touched={this.state.formControls.fridomFighters.touched}
                                valid={this.state.formControls.fridomFighters.valid}
                            />  */}

                {/* <  TextInput name="passportNo"
                                    value={this.state.formControls.passportNo.value}
                                    onChange={this.changeHandler}
                                    options={this.state.formControls.passportNo.options}
                                    touched={this.state.formControls.passportNo.touched}
                                    valid={this.state.formControls.passportNo.valid}
                                />  */}
              </div>
            </div>

            {/* <TextArea name="address"
                                placeholder={this.state.formControls.address.placeholder}
                                value={this.state.formControls.address.value}
                                onChange={this.changeHandler}
                                touched={this.state.formControls.address.touched}
                                valid={this.state.formControls.address.valid}
                            /> */}
            {/* <label for='name' >ইমেইল </label>
                        <Email name="my_email"
                            placeholder={this.state.formControls.my_email.placeholder}
                            value={this.state.formControls.my_email.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.my_email.touched}
                            valid={this.state.formControls.my_email.valid}
                        />
                        <label for='name' >জন্ম তারিখ </label>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />

                    </div>
                    <div class="col-6">
                        <label for='name' >নাম (ইংরেজিতে)</label>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />
                        <label for='name' >জাতীয় পরিচয়পত্র নং(এনআইডি )</label>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />
                        <label for='name' >মোবাইল নং </label>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />
                        <label for='name' >ড্রাইভিং লাইসেন্সে নং </label>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />
                        <label for='name' >ভবিষ্য তহবিল নং </label>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        /> */}
            {/* <TextArea name="address"
                                placeholder={this.state.formControls.address.placeholder}
                                value={this.state.formControls.address.value}
                                onChange={this.changeHandler}
                                touched={this.state.formControls.address.touched}
                                valid={this.state.formControls.address.valid}
                            /> */}
            {/* <Select name="gender"
                        value={this.state.formControls.gender.value}
                        onChange={this.changeHandler}
                        options={this.state.formControls.gender.options}
                        touched={this.state.formControls.gender.touched}
                        valid={this.state.formControls.gender.valid}
                    /> */}

            {/* <Radio name="my_radio"
                                placeholder={this.state.formControls.my_radio.placeholder}
                                value={this.state.formControls.my_radio.value}
                                onChange={this.changeHandler}
                                options={this.state.formControls.my_radio.options}
                                touched={this.state.formControls.my_radio.touched}
                                valid={this.state.formControls.my_radio.valid}
                            /> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

            <span className={this.getBadgeClasses()}>
              <button
                onClick={this.formSubmitHandler}
                disabled={!this.state.formIsValid}
                class="btn btn-danger"
              >
                {/* <button onClick={this.formSubmitHandler}> */}
                Submit
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Try;
