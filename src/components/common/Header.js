import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots.js';

const Header = ({loading}) => {
   return (
      <nav>
         <div>

            <div className="bs-glyphicons">
               <ul className="bs-glyphicons-list">
                  <Link to={'/'}>
                     <li>
                        <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                        <span className="glyphicon-class">home</span>
                     </li>
                  </Link>
               </ul>

            </div>
            {loading && <LoadingDots interval={100} dots={20}/>}
         </div>
      </nav>
   );
};
/*  <Link to="/courses" activeClassName="active">Courses</Link>
 {" | "}
 <Link to="/about" activeClassName="active">About</Link>*/

Header.propTypes = {
   loading: PropTypes.bool.isRequired
};

export default Header;
