import React, { PropTypes } from 'react';

const Button = ({value, className, onClick, width, offset}) => {
    return (
        <div className={"col-xs-offset-" + offset + " col-xs-" + width}>
            <input
                type="submit"
                value={value}
                className={className}
                onClick={onClick} />
        </div>
    )
};

Button.defaultProps = {
    className: "btn btn-primary",
    width: 12,
    offset: 0,
    witdh: 4
}

Button.propTypes = {
    width: PropTypes.number,
    offset: PropTypes.number,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Button;
