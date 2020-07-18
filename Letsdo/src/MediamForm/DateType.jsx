import React from "react";

const DateType = (props) => {
  let formControl = "form-control";

  // if (props.touched && !props.valid) {
  //     formControl = 'form-control control-error';
  // }

  return (
    <div className="form-group">
      <input
        type="text"
        className={formControl}
        // onChange={props.onChange} name={props.name}
        {...props}
      />
    </div>
  );
};

export default DateType;
