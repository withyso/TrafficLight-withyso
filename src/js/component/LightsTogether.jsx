import React from "react";
import { useState } from "react";

export const LightsTogether = () => {
    const [colorRed, setRedColor] = useState('undefinied');
    const [colorGreen, setGreenColor] = useState('undefinied');
    const [colorYellow, setYellowColor] = useState('undefinied');
    const comparator = (event) =>{
        console.log(event.target.id);
        let pointer = event.target.id;
        if(pointer == "green"){
            setGreenColor('selected');
            setYellowColor('')
            setRedColor('')

        }
        if(pointer == "yellow"){
            setYellowColor('selected');
            setRedColor('')
            setGreenColor('')
        }
        if(pointer == "red"){
            setRedColor('selected');
            setYellowColor('')
            setGreenColor('')
        }
    }

    return(
        <div className="bodyLight">
            <div onClick={comparator}
            className={`lights bg-success ${colorGreen}`} id="green"></div>
            <div onClick={comparator}
            className={`lights bg-warning ${colorYellow}`} id="yellow"></div>
            <div onClick={comparator}
            className={`lights bg-danger ${colorRed}`} id="red"></div>
        </div>

    );
}