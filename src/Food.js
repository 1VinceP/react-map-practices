import React from 'react';

export default function Food(props) {
    console.log( props.key )
    return (
        <div className='list'>
            {props.food}
        </div>
    )
}