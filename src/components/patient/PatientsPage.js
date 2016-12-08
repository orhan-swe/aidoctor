import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as patientActions from '../../actions/patientActions.js';
import PatientList from './PatientList';
import CategoryMockData from '../category/CategoryMockData';
import SelectInput from '../common/SelectInput.js';
import Chance from 'chance';
import CreateRow from '../common/UI_components/CreateRow';


class PatientsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.chance = new Chance();
        this.categories = CategoryMockData;

        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.state = {
            currentCategory: this.categories[3],
            currentPatients: this.getNewPatients()
        }
        this.updateRandom = false;
        this.chance = new Chance();
    }
    onChangeCategory(event) {
        //let cat = this.getCategories()[0];
        //debugger;
        let v = parseInt(event.target.value);
        this.updateRandom = true;
        this.setState({
            currentCategory: this.categories[v],
            currentPatients: this.getNewPatients()
        }
        );
    }
    getNewPatients() {
        let a = [];
        for (let s = 0; s < this.chance.integer({ min: 2, max: 30 }); s++) {
            a.push(
                {
                    id: s,
                    name: this.chance.name(),
                    categories: [1, 2, 3],
                    label1: this.chance.character({ pool: 'rgy' }),
                    label2: this.chance.character({ pool: 'rgy' }),
                    label3: this.chance.character({ pool: 'rgy' })
                });
        }
        return a;
    }


    render() {
        //const {patients} = this.props;
        return (
            <div>
            <CreateRow>
                <SelectInput
                    width={6}
                    label=""
                    value={this.state.currentCategory.value}
                    name={this.state.currentCategory.text}
                    options={this.categories}
                    onChange={this.onChangeCategory}
                    error={""} />
                <div className="col-xs-offset-3 col-xs-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </CreateRow>
                <br />
                <PatientList patients={this.state.currentPatients} />
            </div>
        );
    }
}

PatientsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    patients: PropTypes.array.isRequired
};


//inject to the framework so we get courses as props
//ownProps are props attached to this component, maybe we will use later..
function mapStateToProps(state, ownProps) {
    return {
        patients: state.patients
    };
}

//injected to the framework so that we get actions in props, instead of calling props dispatch function
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(patientActions, dispatch)
    };
}
//note two function calls, common in functional programming
export default connect(mapStateToProps, mapDispatchToProps)(PatientsPage);

