

import React, { PropTypes } from 'react';

const SelectInput = ({name, width, label, onChange,
    defaultOption, defaultOptionObj, value, error, options}) => {
    return (
            <div className={"col-xs-" + width}>
                <div className={"form-group"}>
                    <label htmlFor={name}>{label}</label>

                    <div className="field">
                        <select
                            value={value}
                            name={name}
                            onChange={onChange}
                            className="form-control"
                            >
                            {options.map((option) => {
                                return <option key={option.value} value={option.value}> {option.text}</option>;
                            }
                            )};
            </select>
                        {error && <div className="alert alert-danger">{error}</div>}
                    </div>
                </div>
            </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    defaultOptionObj: PropTypes.object,
    error: PropTypes.string,
    value: PropTypes.string,
    //array must have valus and text
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
