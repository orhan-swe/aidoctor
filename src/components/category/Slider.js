import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactSlider from 'react-slider';

class Slider extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.map = this.map.bind(this);
        this.valuesOutput = this.valuesOutput.bind(this);

        this.state = {
            valueArray: props.valueArray
            //value: [0, 20, 50, 70, 100]
            //value: [20]
        };
    }
    map(v, f, that) {
        //in the call function "that" is not used..
        return (v && v.map) ? v.map(f, that) : f.call(that, v, 0);
    }

    onChange(value) {
        this.setState({ valueArray: value });
    }

    valuesOutput() {
        return this.map(this.state.valueArray, (value, i) => {
            return (
                <div key={i}>{value}</div>
            )
        });
    }

    render() {

        return (
            <ReactSlider
                min={this.props.min}
                max={this.props.max}
                className="horizontal-slider-slider"
                value={this.state.valueArray}
                orientation="horizontal"
                withBars={true}
                className="horizontal-slider"
                pearling={false}
                minDistance={this.props.minDistance}
                onChange={this.onChange}
                >
                {this.valuesOutput()}

            </ReactSlider>
        );
    }


}

Slider.propTypes = {
    valueArray: PropTypes.array.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    minDistance: PropTypes.number.isRequired,
    //actions: PropTypes.object.isRequired
};


//inject to the framework so we get props
//ownProps are props attached to this component, maybe we will use later..

function mapStateToProps(state, ownProps) {

    return {
        valueArrays: state.valueArray
    };
}

//injected to the framework so that we get actions in props, instead of calling props dispatch function
function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(patientActions, dispatch)
    };
}
//note two function calls, common in functional programming
export default connect(mapStateToProps, mapDispatchToProps)(Slider);

