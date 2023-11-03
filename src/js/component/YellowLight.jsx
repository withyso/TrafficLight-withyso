
import React from "react";
import { useState } from "react";

export const YellowLight = () => {
    const [color, setColor] = useState('undefinied');
    const eventHandler = () => {
        setColor('selected');
        console.log(color);
    }
    return (
        <div onClick={eventHandler} className={`lights bg-warning ${color}`} id="yellow"></div>
    );
};