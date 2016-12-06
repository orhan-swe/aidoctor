import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as patientActions from '../../actions/patientActions.js';
import PatientList from './PatientList';


class PatientsPage extends React.Component {

   constructor(props, context) {
      super(props, context);
   }


   render() {
      const {patients} = this.props;
      return (
         <div>
            <h3>Category1</h3>
            <PatientList patients={patients} />
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

