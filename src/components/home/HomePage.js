import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
   render() {
      return (
         <div>

            <div className="bs-glyphicons">
               <ul className="bs-glyphicons-list">
                  <Link to={'/patients'}>
                     <li>
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        <span className="glyphicon-class">patients</span>
                     </li>
                  </Link>
                  <Link to={'/settings'}>
                     <li>
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        <span className="glyphicon-class">settings</span>
                     </li>
                  </Link>
                  <Link to={'/courses'}>
                     <li>
                        <span className="glyphicon glyphicon-certificate" aria-hidden="true"></span>
                        <span className="glyphicon-class">administration</span>
                     </li>
                  </Link>
                  <li>
                     <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                     <span className="glyphicon-class">category</span>
                  </li>
               </ul>

            </div>
         </div>
      );
   }
}

export default HomePage;
