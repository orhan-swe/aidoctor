import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from './Slider.js';
import SelectInput from '../common/SelectInput.js';
import Chance from 'chance';
import CategoryMockData from './CategoryMockData';
import { hashHistory } from 'react-router';
import CreateRow from '../common/UI_components/CreateRow';
import Button from '../common/UI_components/Button';
import TextInput from '../common/TextInput';
import ListSliders from './ListSliders';
import AddNewSlider from './AddNewSlider';

class CreateNewCagegory extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onSaveCategory = this.onSaveCategory.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.addNewSlider = this.addNewSlider.bind(this);
        this.variables = [
            { id: 1, value: "heart beat", text: "heart beat" }, { id: 2, value: "weight", text: "weight"},
             {id: 3, value: "white blood cells", text: "white blood cells" }, { id: 4, value: "age", text: "age" }
        ];
        this.state = {
            variables: this.variables,
            currentVariable: this.variables[0],
            slidersArray: [],
            categoryName: ""
        }
    }
    onSelectVariable(event) {
        let v = parseInt(event.target.value);
        this.updateRandom = true;
        this.setState({ currentCategory: this.categories[v] });
    }
    onSaveCategory(event) {
        window.alert("Demonstration Save");
    }
    onNameChange(event) {
        this.setState({ categoryName: event.target.value })
    }
    addNewSlider(event) {
        this.setState({
            //currentVariable: this.variables[event.target.id - 1],
            sliderArray: Object.assign(this.state.slidersArray,
                { valueArray: [10, 40, 80], min: 0, max: 100, minDistance: 3, updateRandom: false }
            )
        });
    }

    render() {
        return (
            <div>
                <TextInput
                    name="Category Name:"
                    label="Category Name"
                    value={this.state.categoryName}
                    onChange={this.onNameChange}
                    error={""} />
                    <br/>
                <ListSliders slidersArray={this.state.slidersArray} />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <SelectInput
                    width={12}
                    label="Select Variable"
                    value={this.state.currentVariable.value}
                    name={this.state.currentVariable.text}
                    options={this.variables}
                    onChange={this.addNewSlider}
                    error={""} />
                    <br/>
                    <CreateRow>
                <Button onClick={this.onSaveCategory} value="Save" />
                </CreateRow>
            </div>
        );
    }


}

CreateNewCagegory.propTypes = {
    //actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {

    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(patientActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCagegory);

