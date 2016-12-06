import React, {PropTypes} from 'react';
import Link from 'react-router';


const MockPanel = ({props}) => {
   /*<Link to={'/'}>*/
   return (
      <div className="panel panel-default">
         <div className="panel-heading">Panel heading</div>
         <div className="panel-body">
            <p>...</p>
         </div>

         <ul className="list-group">
               <li className="list-group-item"> Home</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
         </ul>
      </div>
   );
};

MockPanel.propTypes = {
   //myProp: PropTypes.object.isRequired
};

export default MockPanel;
