import React, {PropTypes} from 'react';

const CreateRow = (props) => {
   return (
      <div className="row">
        {props.children}
      </div>
   );
};

CreateRow.propTypes = {
}

export default CreateRow;
