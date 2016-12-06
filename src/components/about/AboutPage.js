import React from 'react';

//one could use statelss component here but as of writing hot reloading only supports components that have parent
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>

        <p> This application uses React, Redux, React Router and a variety of other helpful libraries. </p>
      </div>
    );
  }
}

export default AboutPage;
