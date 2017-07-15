import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter, increment, doubleAsync }) => {
    console.log( counter );
    return (
        <div style={{ margin: '0 auto' }} >
            <h2>Counter: {counter}</h2>
            <button className='btn btn-primary' onClick={increment}>
          Increment
        </button>
            {' '}
            <button className='btn btn-secondary' onClick={doubleAsync}>
          Double (Async)
        </button>
        </div>
    );
};
Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    doubleAsync: PropTypes.func.isRequired,
};

export default Counter;
