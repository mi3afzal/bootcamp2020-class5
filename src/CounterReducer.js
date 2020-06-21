/* eslint-disable default-case */

const counterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return ++state;

        case 'DECREMENT':
            return --state;
    
        case 'RESET':
            return 0;
    }
}

export default counterReducer;