const Body = () => {
    const squares = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
             squares.push(
            <div 
                key={`${i}-${j}`} 
            className="h-20 w-40 bg-white m-2"
            > if (i==0&& j==2 || i==2 && j==0 || i==2 && j==2 || i==2 && j== 4 || i==4 && j==2) {
                for (let k = 0; k < 4; k++) {
                    <div 
                    key={`${i}-${j}-inner-${k}`} 
                    className="h-8 w-8 bg-black m-1 inline-block"
                    ></div>
                }
                
            } </div>
        );
    }
  }
  return (
    <div className="h-screen  bg-violet-500 flex justify-start items-start">
        <div className="w-250 h-150 mt-2 ml-20  flex flex-wrap justify-between items-start border-4  border-black">{squares
        } </div>
    </div>
    
  )
}

export default Body