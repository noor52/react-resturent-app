import React from 'react';

const Email = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="date" className={formControl} {...props} />
        </div>
    );
}

export default Email;