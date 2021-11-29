import React, { useState, useEffect, ChangeEvent} from 'react';
import { stateObject } from '../state/state-management';

const ComponentOne = () => {

    const [state, setState] = useState<any>();
    const [input, setInput] = useState<string>("");

    useEffect(() => {

        const callback = (stateData: any) => {

            setState(stateData);

        }

        stateObject.subscribe(callback);

        return () => stateObject.unsubscribe(callback);

    }, []);

    const updateInput = (event: ChangeEvent<HTMLInputElement>) => {

        setInput(event.target.value);
        stateObject.emit(event.target.value);

    }

    return (

        <div style = {{height: "100vh", width: "50%", backgroundColor: "darkred", color: "white"}}>
            <div>{state !== input ? state : null}</div>
            <input type = "input" value = {input} onChange={(event) => updateInput(event)} />
        </div>

    )

}

export default ComponentOne;