import {useState} from 'react';

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return ([
        {
            value,
            onChange: (e) => setState(e.target.value)
        },
        () => setValue(initialValue)
    ])
} 