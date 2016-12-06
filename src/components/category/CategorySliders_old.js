import React, { PropTypes } from 'react';
import ReactBootstrapSlider from 'bootstrap-slider';
import es6BindAll from "es6bindall";

function isPropNumberOrArray(props, propName, componentName) {
    // console.log("props[" + propName + "]=" + props[propName]);
    if (!((typeof props[propName] === "number") || (typeof props[propName] === "undefined") || Array.isArray(props[propName]))) {
        return new Error(
            [
                componentName,
                "requires that",
                propName,
                "be a number or an array."
            ].join(" ")
        );
    }
}

const wrapperDivStyles = {
    "backgroundColor": "#E0E0E0",
    "padding": "20px",
    "width": "300px"
};


const DemoSingleValueSpan = ({ id, value }) => (
    <span>
        Value: <span id={"valueSpan" + id}>{value}</span>
    </span>
);

DemoSingleValueSpan.propTypes = {
    id: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired
};

const DemoMultiValueSpan = ({ id, value }) => (
    <div>
        Lower Value: <span id={"valueSpan" + id + "Low"}>{value[0]}</span><br />
        Upper Value: <span id={"valueSpan" + id + "High"}>{value[1]}</span><br />
    </div>
);

DemoMultiValueSpan.propTypes = {
    id: React.PropTypes.string.isRequired,
    value: React.PropTypes.arrayOf(React.PropTypes.number.isRequired).isRequired
};

class CategorySliders extends React.Component {
    constructor(props) {
        super(props);
        es6BindAll(this, ["changeValue", "changeAxes"]);
        this.state = {
         ...this.props,
            currentValue: props.startValue
        };
        delete this.state.startValue;
    }

    changeValue(e) {
        console.log("changeValue triggered");
        this.setState({ currentValue: e.target.value });
    }

    changeAxes() {
        this.setState({
            currentValue: 500,
            min: 0,
            max: 2000,
            step: 100
        });
    }

    render() {
        let newValue = this.state.currentValue;
        let id = this.props.id;
        let sliderControl, valueSpan, changeAxesButton;
        debugger;
        if (Array.isArray(newValue)) {
            sliderControl = (
                <ReactBootstrapSlider
                    {...this.state}
                    value={this.state.currentValue}
                    change={this.changeValue} />
            );
            valueSpan = (
                <DemoMultiValueSpan
                    id={id}
                    value={newValue} />
            );
        } else {
            sliderControl = (
                <ReactBootstrapSlider
                    {...this.state}
                    value={this.state.currentValue}
                    slideStop={this.changeValue} />
            );
            valueSpan = (
                <DemoSingleValueSpan
                    id={id}
                    value={newValue} />
            );
            changeAxesButton = id === "ticksSlider" ? null :
                <button id={"but" + id} onClick={this.changeAxes}> Change axes </button>;

        }
        return (
            <div>
                <div style={wrapperDivStyles}>
                    {sliderControl}
                </div>
                <br /> <br />
                {valueSpan}
                <br /><br />
                {changeAxesButton}
            </div>
        );
    }

}


CategorySliders.propTypes = {
    id: React.PropTypes.string,
    value: isPropNumberOrArray,
    startValue: isPropNumberOrArray
};
export default CategorySliders;
