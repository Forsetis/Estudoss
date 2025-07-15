import React from "react";
import './Button.css'

class Button extends React.Component {
    render() {
        const { typeButton, onClickButton, labelButton, className } = this.props;
        return(
            <button
                type={typeButton}
                onClick={onClickButton}
                className={className}
            >{labelButton} 
            </button>
        )
    }
}

export default Button