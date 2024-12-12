import TrainerCard from "./Trainerscard/trainercard";
import AutoPlay from "./Trainersslide/slider";

function Trainer(){
    return(
        <div style={{marginTop:"30px"}}>
            <div>
                <h1 style={{fontFamily:"cursive",fontWeight:"bolder",color:"red"}}>Trainers</h1>
                <AutoPlay/>
                <TrainerCard/>
            </div>
        </div>
    )
}
export default Trainer;