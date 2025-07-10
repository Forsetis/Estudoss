import React from "react";

class InputProducts extends React.Component {
    render() {
        const { inputType, inputLabel, inputName, onChangeInput, inputValue, isRequired } = this.props;
        return (
            <label>
                {inputLabel}
                <input
                type={inputType}
                name={inputName}
                value={inputValue}
                onChange={onChangeInput}
                required={isRequired}
                />
            </label>
        );
    }
}

export default InputProducts