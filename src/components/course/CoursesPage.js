import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions.js';
import CourseList from './CourseList';
import {hashHistory} from 'react-router';


class CoursesPage extends React.Component {

   constructor(props, context) {
      super(props, context);

      this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
   }


   redirectToAddCoursePage() {
      hashHistory.push('/course');
   }

   render() {
      const {courses} = this.props;
      return (
         <div>
            <h1>Courses</h1>
            <input
               type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
            <CourseList courses={courses} />
         </div>
      );
   }
}

CoursesPage.propTypes = {
   actions: PropTypes.object.isRequired,
   courses: PropTypes.array.isRequired
};


//inject to the framework so we get courses as props
//ownProps are props attached to this component, maybe we will use later..
function mapStateToProps(state, ownProps) {
   return {
      courses: state.courses
   };
}

//injected to the framework so that we get actions in props, instead of calling props dispatch function
function mapDispatchToProps(dispatch) {
   return {
      //another way to do this:
      //createCourse: bindActionCreators(courseActions.createCourse, dispatch)
      //instead we will send all course actions to the framework
      actions: bindActionCreators(courseActions, dispatch)
   };
}
//note two function calls, common in functional programming
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

