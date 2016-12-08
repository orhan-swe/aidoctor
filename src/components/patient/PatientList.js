import React, {PropTypes} from 'react';
import PatientListRow from './PatientListRow.js';

//const CourseList = ({courses, deleteCourse}) => {
const PatientList = ({patients}) => {
   return (
       <div>
      <div className="table-patients">
         <table className="table table-striped">
            <thead>
            <tr>
               <th>Name</th>
               <th>blood pressure</th>
               <th>white blood cells</th>
               <th>heart beat</th>
            </tr>
            </thead>
            <tbody>
            {patients.map(patient =>
                  <PatientListRow key={patient.id} patient={patient}/>
            )}
            </tbody>
         </table>
      </div>
       </div>
   );
};

PatientList.propTypes = {
   patients: PropTypes.array.isRequired
};

export default PatientList;
