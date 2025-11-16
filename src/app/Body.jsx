"use client";
import React from "react";

const Body = () => {
    const [mathRandomValue, setMathRandomValue] = React.useState(0);
    const squares = [];

    const move = () => {
        alert("Move Clicked");
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {

            // create an array for inner divs
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
                            className="h-8 w-10 bg-black m-1 " onClick={()=>move()}
                        ></div>
                    );
                }
            }

            // push main square
            squares.push(
                <div
                    key={`${i}-${j}`}
                    className="h-20 w-40 bg-white m-2 flex flex-wrap justify-between items-start"
                >
                    {innerDivs}
                </div>
            );
        }
    }
    const mathRandom = () => {
        setMathRandomValue(Math.floor(Math.random() * 5)+1);
        console.log(Math.floor(Math.random()*5)+1);
    }

    return (
        <div className="h-screen bg-violet-500 flex justify-start items-start">
          <div className="grid grid-rows-3 grid-cols-3 w-full h-full place-items-center">

             {/* Top Player (P1) */}
            <div className="row-start-1 col-start-2 mb-45">P1</div>

            {/* Left Player (P2) */}
            <div className="row-start-2 col-start-1">P2</div>

            {/* Game Board in Middle */}
            <div className="row-start-2 col-start-2 ">

           <div className=" w-250 h-150 mt-2 ml-20 flex flex-wrap justify-between items-start border-4 border-black">
                {squares}
            
            {/* YOUR GAME BOARD HERE */}
            </div>
            </div>

             {/* Right Player (P3) */}
            <div className="row-start-2 col-start-3 ml-50">P3</div>

             {/* Bottom Player (P4) */}
            <div className="row-start-3 col-start-2 mt-45">P4</div>

          </div>

        </div>
    );
}

export default Body;