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
                  <Link to={'/categories'}>
                     <li>
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        <span className="glyphicon-class">categories</span>
                     </li>
                  </Link>
                  <Link to={'/administration'}>
                     <li>
                        <span className="glyphicon glyphicon-certificate" aria-hidden="true"></span>
                        <span className="glyphicon-class">administration</span>
                     </li>
                  </Link>
                  <Link to={'/'}>
                  <li>
                     <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                     <span className="glyphicon-class">emergency</span>
                  </li>
                  </Link>
               </ul>

            </div>
         </div>
      );
   }
}

export default HomePage;
