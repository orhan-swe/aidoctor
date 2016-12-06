import React, {PropTypes} from 'react';
import Link from 'react-router';


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

const MockTable = ({props}) => {
   /*<Link to={'/'}>*/
   return (
      <div className="panel panel-default">
         <div className="panel-heading">Panel heading</div>
         <div className="panel-body">
            <p>...</p>
         </div>

         <table className="table">
            <thead>
            <tr>
               <th>#</th>
               <th>Limit 1</th>
               <th>Limit 2</th>
               <th>Limit 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <th scope="row">1</th>
               <td>{getLabel('r')}</td>
               <td>{getLabel('g')}</td>
               <td>{getLabel('y')}</td>
            </tr>
            <tr>
               <th scope="row">2</th>
               <td>{getLabel('y')}</td>
               <td>{getLabel('r')}</td>
               <td>{getLabel('y')}</td>
            </tr>
            <tr>
               <th scope="row">3</th>
               <td>{getLabel('g')}</td>
               <td>{getLabel('g')}</td>
               <td>{getLabel('y')}</td>
            </tr>
            </tbody>
         </table>

      </div>
   );
};

MockTable.propTypes = {
   //myProp: PropTypes.object.isRequired
};

export default MockTable;
