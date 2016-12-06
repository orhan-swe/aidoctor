import React, {PropTypes} from 'react';
import ReactGridLayout from 'react-grid-layout';
import MockPanel from './../patientDetails/MockPanel.js'
import MockTable from './../patientDetails/MockTable.js'
import MockGraph from './../patientDetails/MockGraph.js'


const PatientMainOverview = ({props}) => {
   // layout is an array of objects, see the demo for more complete usage
   //{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
   //{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
   var layout = [
      {i: 'c', x: 0, y: 0, w: 4, h: 8},
      {i: 'd', x: 5, y: 0, w: 4, h: 8},
      {i: 'e', x: 0, y: 9, w: 4, h: 8},
      {i: 'f', x: 0, y: 17, w: 6, h: 10}
   ];
   return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
         <div key={'c'}><MockPanel/></div>
         <div key={'d'}><MockTable/></div>
         <div key={'e'}><MockTable/></div>
         <div key={'f'}><MockGraph/></div>
      </ReactGridLayout>
   )
};

PatientMainOverview.propTypes = {
    //myProp: PropTypes.object.isRequired
};

export default PatientMainOverview;
