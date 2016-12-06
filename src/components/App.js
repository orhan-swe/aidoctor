import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import {connect} from 'react-redux';

class App extends React.Component {

   render() {
      //the children are injected from react router
      return (
         <div className="container-fluid">
            <Header loading={this.props.loading}/>
            {this.props.children}
         </div>
      );
   }
}

//validate props
App.propTypes = {
   children: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
   return {
      loading: state.numAjaxCallsInProgress > 0
   };
}

export default connect(mapStateToProps)(App);
