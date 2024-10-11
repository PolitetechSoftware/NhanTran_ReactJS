import { useState } from 'react';

const useStates = (initialState: any) => {
    const [states, setState] = useState(initialState);

    const setStates = (newState: any) => setState((prevState: any) => ({ ...prevState, ...newState }));

    return {
        states,
        setStates
    };
};
export default useStates;