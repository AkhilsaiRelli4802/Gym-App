import BasicExample from "./pricecards";

function Price(){
    return(
        <div style={{marginTop:"30px"}}>
         <h1 style={{fontFamily:"cursive",fontWeight:"bolder",color:"red"}}>Choose your Sprit pass</h1>
         <p style={{font:"caption",textDecorationColor:"ActiveCaption",fontSize:"20px"}}>3 flexible plans to suit your fitness needs</p>
            <BasicExample/>
        </div>
    )
}
export default Price;