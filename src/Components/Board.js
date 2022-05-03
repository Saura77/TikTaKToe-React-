import { Box } from "./Box"

function Board(props){
    
    const createBox = values =>{
        values.map(value  => {
            <Box value={value}/>
        })
    };

    return(
        <div>
            <div className="row">
                {createBox[0,1,2]}    
            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
    )
}   

export default Board;