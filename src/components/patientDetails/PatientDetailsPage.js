import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as patientActions from '../../actions/patientActions.js';
import PatientMainOverview from './../patientDetails/PatientMainOverview.js';


class PatientDetailsPage extends React.Component {

   constructor(props, context) {
      super(props, context);
      this.state = {
         patient: Object.assign({}, this.props.patient),
         errors: {},
         saving: false
      };
   }

   componentWillReceiveProps(nextProps) {
      if (this.props.patient.id != nextProps.patient.id) {
         //to populate the form on initial re-loading of the page
         this.setState({patient: Object.assign({}, nextProps.patient)});
      }
   }

   render() {
      const {patient} = this.props;
      return (
         <div>
            <h4>{patient ? "Name: " + patient.name: null}</h4>
            <PatientMainOverview patient={patient} />
         </div>
      );
   }
}

PatientDetailsPage.propTypes = {
   actions: PropTypes.object.isRequired,
   patient: PropTypes.object.isRequired
};

PatientDetailsPage.contextTypes = {
   router: PropTypes.object
};

function getPatientById(patients, id) {
   const patient = patients.filter(patient => patient.id == id);
   if (patient)
      return patient[0];
   return null;
}


//inject to the framewor so we get as props
function mapStateToProps(state, ownProps) {
   const patientId = ownProps.params.id;  //in case we have id in the url form needs to be populated

   let patient = {id: '', name: '', label1: '', labe2: '', label3: ''};

   if (typeof patientId !== 'undefined' && state.patients.length > 0) {
      patient = getPatientById(state.patients, patientId);
   }

   return {
      patient
   };
}


//injected to the framework so that we get actions in props, instead of calling props dispatch function
function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(patientActions, dispatch)
   };
}
//note two function calls, common in functional programming
export default connect(mapStateToProps, mapDispatchToProps)(PatientDetailsPage);

