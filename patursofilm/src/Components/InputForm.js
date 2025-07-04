import React from "react";

class InputForm extends React.Component {
    render() {
        const { inputType, inputLabel, inputName, onChangeInput, inputValue, isRiquered } = this.props;
        return (
            <label>
                {inputLabel}
                <input 
                type={ inputType }
                name={inputName}
                value={inputValue}
                onChange={onChangeInput}
                isRiqueredInput={isRiquered}
                />
            </label>
        );
    }
}

export default InputForm