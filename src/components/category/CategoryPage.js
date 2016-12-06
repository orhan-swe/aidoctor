import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from './Slider.js';
import SelectInput from '../common/SelectInput.js';

class CategoryPage extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.categories =
            [
                { id: 0, value: "0", text: "Category1" },
                { id: 1, value: "1", text: "Category3" },
                { id: 2, value: "2", text: "Category4" },
                { id: 3, value: "3", text: "Category5" }
            ];

        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.state = {
            currentCategory: this.categories[0]
        }
    }
    onChangeCategory(event) {
        //let cat = this.getCategories()[0];
        debugger;
        let v = parseInt(event.target.value);
        this.setState({ currentCategory: this.categories[v] });
    }
    render() {
        return (
            <div>
                <SelectInput
                    label=""
                    value={this.state.currentCategory.value}
                    name={this.state.currentCategory.text}
                    defaultOption="Select Category"
                    options={this.categories}
                    onChange={this.onChangeCategory}
                    error={""} />

                <h3>{this.state.currentCategory.text}</h3>
                <br />
                <h4>Hear Beat</h4>
                <Slider
                    min={0}
                    max={100}
                    valueArray={[20, 40, 70]}
                    minDistance={1}
                    />
                <h4>Red Blood Cells</h4>
                <Slider
                    min={0}
                    max={100}
                    valueArray={[20, 40, 50, 70]}
                    minDistance={1}
                    />
                <h4>White Blood Cells</h4>
                <Slider
                    min={100}
                    max={10000}
                    valueArray={[355, 6755]}
                    minDistance={20}
                    />
                <h4>Weight</h4>
                <Slider
                    min={0}
                    max={100}
                    valueArray={[20, 40]}
                    minDistance={3}
                    />
            </div>
        );
    }


}

CategoryPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);

