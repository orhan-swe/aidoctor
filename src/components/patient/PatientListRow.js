import React, {PropTypes} from 'react';
import {Link} from 'react-router';


function getLabel(level) {
   switch(level) {
      case('r'):
           return (
              <span className="label label-danger">Danger</span>
           );
      case('g'):
         return (
            <span className="label label-success">OK</span>
         );
      case('y'):
         return (
            <span className="label label-warning">Warning</span>
         );
      default:
         return (
            <span className="label label-default">Error</span>
         );
   }
}
const PatientListRow = ({patient}) => {
   return (
      <tr>
         <td><Link to={'/patient/' + patient.id}> {patient.name}</Link></td>
         <td>{getLabel(patient.label1)}</td>
         <td>{getLabel(patient.label2)}</td>
         <td>{getLabel(patient.label3)}</td>
      </tr>
   );
};

PatientListRow.propTypes = {
   patient: PropTypes.object.isRequired
};

export default PatientListRow;
