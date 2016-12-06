import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';
import CoursesPage from './components/course/CoursesPage.js';
import PatientsPage from './components/patient/PatientsPage.js';
import ManagedCoursePage from './components/course/ManageCoursePage.js';
import PatientDetailsPage from './components/patientDetails/PatientDetailsPage.js';
import CourseForm from './components/course/CourseForm.js';
import CategoryPage from './components/category/CategoryPage.js';
      
/*<Route path="*" component={NotFoundPage}/>*/

export default (
   <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="courses" component={CoursesPage}/>
      <Route path="patients" component={PatientsPage}/>
      <Route path="course" component={ManagedCoursePage}/>
      <Route path="course/:id" component={ManagedCoursePage}/>
      <Route path="patient/:id" component={PatientDetailsPage}/>
      <Route path="settings" component={CategoryPage}/>
      <Route path="about" component={AboutPage}/>
   </Route>
);
