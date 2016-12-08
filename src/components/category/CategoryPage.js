import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from './Slider.js';
import SelectInput from '../common/SelectInput.js';
import Chance from 'chance';
import CategoryMockData from './CategoryMockData';
import { hashHistory } from 'react-router';
import CreateRow from  '../common/UI_components/CreateRow';
import Button from  '../common/UI_components/Button';

class CategoryPage extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.categories = CategoryMockData;

        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.state = {
            currentCategory: this.categories[3],
            updateRandom: false
        }
        this.updateRandom = false;
        this.chance = new Chance();
    }
    onChangeCategory(event) {
        //let cat = this.getCategories()[0];
        //debugger;
        let v = parseInt(event.target.value);
        this.updateRandom = true;
        this.setState({ currentCategory: this.categories[v] });
    }
    redirectToAddCategoryPage() {
        hashHistory.push('/create_category');
    }
                //<input
                //    type="submit"
                //    value="Create Category"
                //    className="btn btn-primary"
                //    onClick={this.redirectToAddCategoryPage} />

    render() {
        return (
            <div>
                <CreateRow>
                    <SelectInput
                        width={4}
                        label=""
                        value={this.state.currentCategory.value}
                        name={this.state.currentCategory.text}
                        options={this.categories}
                        onChange={this.onChangeCategory}
                        error={""} />
                    <Button
                        offset={4}
                        width={4}
                        value="Create New Category"
                        onClick={this.redirectToAddCategoryPage} />
                </CreateRow>
                <br />
                <br />
                <h4>{this.state.currentCategory.text}</h4>
                <br />
                <h5>Heart Beat</h5>
                <Slider
                    min={0}
                    max={100}
                    valueArray={[
                        this.chance.natural({ min: 14, max: 30 }),
                        this.chance.natural({ min: 35, max: 50 }),
                        this.chance.natural({ min: 60, max: 90 })
                    ]}
                    minDistance={1}
                    updateRandom={this.updateRandom}
                    />
                <h5>Red Blood Cells</h5>
                <Slider
                    min={0}
                    max={100}
                    valueArray={[
                        this.chance.natural({ min: 14, max: 30 }),
                        this.chance.natural({ min: 35, max: 50 }),
                        this.chance.natural({ min: 52, max: 70 }),
                        this.chance.natural({ min: 75, max: 99 })
                    ]}
                    minDistance={1}
                    updateRandom={this.updateRandom}
                    />
                <h5>White Blood Cells</h5>
                <Slider
                    min={100}
                    max={10000}
                    valueArray={[
                        this.chance.natural({ min: 150, max: 3000 }),
                        this.chance.natural({ min: 4000, max: 10000 })
                    ]}
                    minDistance={20}
                    updateRandom={this.updateRandom}
                    />
                <h5>Weight</h5>
                <Slider
                    min={0}
                    max={100}
                    valueArray={[
                        this.chance.natural({ min: 10, max: 50 }),
                        this.chance.natural({ min: 60, max: 100 })
                    ]}
                    minDistance={3}
                    updateRandom={this.updateRandom}
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

