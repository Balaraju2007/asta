"use client";
import React from "react";

const Body = () => {
    const [mathRandomValue, setMathRandomValue] = React.useState(0);
    const [turn, setTurn] = React.useState(1); 
    const squares = [];

    const move = () => {
        alert("Move Clicked");
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {

            let innerDivs = [];

            if (
                (i == 0 && j == 2) ||
                (i == 2 && j == 0) ||
                (i == 2 && j == 4) ||
                (i == 4 && j == 2)
            ) {
                for (let k = 0; k < 4; k++) {
                    innerDivs.push(
                        <div
                            key={`${i}-${j}-inner-${k}`}
                            className="h-8 w-10 bg-black m-1"
                            onClick={move}
                        ></div>
                    );
                }
            }

            squares.push(
                <div
                    key={`${i}-${j}`}
                    className="bg-white flex flex-wrap justify-between items-start"
                >
                    {innerDivs}
                </div>
            );
        }
    }

    const mathRandom = () => {
        const val = Math.floor(Math.random() * 5) + 1;
        setMathRandomValue(val);
        console.log(val);
        setTurn((prevTurn) => (prevTurn % 4) + 1);
    }

    return (
        <div className="h-screen bg-violet-500 flex justify-start items-start ">
            
            <div className="grid grid-rows-3 grid-cols-3 w-full h-full place-items-center mb-40 ">

                {/* PERSON 1 */}
                <div className="row-start-1 col-start-2">
                    P1     {turn == 1 && <button onClick={mathRandom} className="text-2xl font-bold  p-1">{mathRandomValue}</button>}
                </div>

                {/* PERSON 2 */}
                <div className="row-start-2 col-start-1">
                    P2 {turn == 2 && <button onClick={mathRandom} className="text-2xl font-bold  p-1">{mathRandomValue}</button>}
                </div>

                {/* GAME BOARD */}
                <div className="row-start-2 col-start-2">
                    <div className="w-[40vw] h-[60vh] grid grid-cols-5 grid-rows-5 gap-2 ">
                        {squares}
                    </div>
                </div>

                {/* PERSON 4 */}
                <div className="row-start-2 col-start-3">
                    P4 {turn == 4 && <button onClick={mathRandom} className="text-2xl font-bold  p-1">{mathRandomValue}</button>}
                </div>

                {/* PERSON 3 */}
                <div className="row-start-3 col-start-2">
                    P3 {turn == 3 && <button onClick={mathRandom} className="text-2xl font-bold  p-1">{mathRandomValue}</button>}
                </div>

            </div>
        </div>
    );
}

export default Body;
