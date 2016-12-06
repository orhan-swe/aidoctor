
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions.js';
import CourseForm from './CourseForm.js';
import toastr from 'toastr';

class ManageCoursesPage extends React.Component {

   constructor(props, context) {
      super(props, context);

      this.state = {
         course: Object.assign({}, this.props.course),
         errors: {},
         saving: false
      };

      this.updateCourseState = this.updateCourseState.bind(this);
      this.saveCourse = this.saveCourse.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      if (this.props.course.id != nextProps.course.id) {
         //to populate the form on initial re-loading of the page
         this.setState({course: Object.assign({}, nextProps.course)});
      }
   }

   updateCourseState(event) {
      const field = event.target.name;
      let course = this.state.course;
      course[field] = event.target.value;
      return this.setState({course: course});
   }

   saveCourse(event) {
      event.preventDefault();
      this.setState({saving: true});
      //this.props.dispatch(saveCourse(this.state.course));
      this.props.actions.saveCourseApi(this.state.course)
         .then(() =>
            this.redirect())
         .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
         });
   }

   redirect() {
      this.setState({saving: false});
      toastr.success('Course saved');
      this.context.router.push('courses');
   }

   render() {
      return (
         <CourseForm
            course={this.state.course}
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
            allAuthors={this.props.authors}
            errors={this.state.errors}
            saving={this.state.saving}
            />
      );
   }
}

ManageCoursesPage.propTypes = {
   course: PropTypes.object.isRequired,
   authors: PropTypes.array.isRequired,
   actions: PropTypes.object.isRequired
};

ManageCoursesPage.contextTypes = {
   router: PropTypes.object
};

function getCourseById(courses, id) {
   const course = courses.filter(course => course.id == id);
   if (course)
      return course[0];
   return null;
}


//inject to the framewor so we get course as props
function mapStateToProps(state, ownProps) {
   const courseId = ownProps.params.id;  //in case we have id in the url form needs to be populated

   let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

   if (typeof courseId !== 'undefined' && state.courses.length > 0) {
      course = getCourseById(state.courses, courseId);
   }
   const authorsFormattedForDropdown = state.authors.map(author => {
      return {
         value: author.id,
         text: author.firstName + ' ' + author.lastName
      };
   });

   return {
      course,
      authors: authorsFormattedForDropdown
   };
}

//injected to the framework so that we get actions in props, instead of calling props dispatch function
function mapDispatchToProps(dispatch) {
   return {
      //another was to do this:
      //createCourse: bindActionCreators(courseActions.createCourse, dispatch)
      //instead we will send all course actions to the framework
      actions: bindActionCreators(courseActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
