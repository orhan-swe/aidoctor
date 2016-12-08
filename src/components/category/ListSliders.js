import React, { PropTypes } from 'react';
import Slider from './Slider';

const ListSliders = ({slidersArray}) => {
    return (
        <div>

            {slidersArray.map((sliderProps) => {
                return (
                    <Slider
                        {...sliderProps}
                        key={sliderProps.id}
                        />
                )
            })}
        </div>
    );
};

ListSliders.propTypes = {
    slidersArray: PropTypes.array.isRequired
};

export default ListSliders;
