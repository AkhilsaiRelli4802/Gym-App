// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { FaInstagram } from "react-icons/fa";
import"./Trainerscard.css";

function TrainerCard() {
  return (
    <div className='Trainerscontainer'>
        <div>
        <Card style={{ width: '20rem',margin:"30px", backgroundColor:'gray'}}>
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-man_23-2150770957.jpg?t=st=1719142098~exp=1719145698~hmac=f21d24aedd96ab20bed7ff516428e575a716ee18bfde023e841fd8398c25cc6f&w=996"/>
            <Card.Body>
                <Card.Title style={{color:"red",fontFamily:"chiller",fontWeight:"bolder",fontSize:"40px"}}>Sanju</Card.Title>
                <Card.Text style={{fontFamily:"serif",fontSize:"20px",fontStyle:"inherit", color:"whitesmoke"}}>
                With over 10 years of experience and certifications from NASM, ACE, and ACSM, Sanju specializes in weight loss, strength training, and functional fitness. Passionate about hiking and nutrition, Sanju brings a well-rounded approach to training. Ready to start your fitness journey with Sanju?
                </Card.Text>
                <div>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1719139419~exp=1719143019~hmac=ee0acac23d8e3501586c8c6feee6be98de61f90f172dd8e0453e9ecd95afd17b&w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/premium-photo/whatsaap-icon-logo_895118-4059.jpg?w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/premium-vector/gmail-logo-vector_986045-36.jpg?w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                </div>
            </Card.Body>
        </Card>
        </div>

        <div>
        <Card style={{ width: '20rem',margin:"30px",backgroundColor:"gray" }}>
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/full-shot-people-training-together-gym_23-2150290027.jpg?t=st=1719143535~exp=1719147135~hmac=e0394573a98f7df978aaffbab798281ce5931d34a6cd1608a4ce3aaca5b78cc8&w=826" height={179}/>
            <Card.Body>
                <Card.Title style={{color:"red",fontFamily:"chiller",fontWeight:"bolder",fontSize:"40px"}}>Heer</Card.Title>
                <Card.Text style={{fontFamily:"serif",fontSize:"20px",fontStyle:"inherit", color:"whitesmoke"}}>
                With over 5 years of experience and certifications from NASM, ACE, and ACSM, Heer specializes in weight loss, strength training, and functional fitness. Passionate about hiking and nutrition, Heer brings a well-rounded approach to training. Ready to start your fitness journey with Heer?
                </Card.Text>
                <div>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1719139419~exp=1719143019~hmac=ee0acac23d8e3501586c8c6feee6be98de61f90f172dd8e0453e9ecd95afd17b&w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/premium-photo/whatsaap-icon-logo_895118-4059.jpg?w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/premium-vector/gmail-logo-vector_986045-36.jpg?w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                </div>
            </Card.Body>
        </Card>
        </div>

        <div>
        <Card style={{ width: '20rem',margin:"30px",backgroundColor:"gray"}}>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/03/13/49/59/240_F_313495917_8unEgNBEogGWzllv9EvaMpFx8WGZqFKo.jpg" height={179}/>
            <Card.Body>
                <Card.Title style={{color:"red",fontFamily:"chiller",fontWeight:"bolder",fontSize:"40px"}}>Arjun</Card.Title>
                <Card.Text style={{fontFamily:"serif",fontSize:"20px",fontStyle:"inherit",color:"whitesmoke"}}>
                With over 8 years of experience and certifications from NASM, ACE, and ACSM, Arjun specializes in weight loss, strength training, and functional fitness. Passionate about hiking and nutrition, Arjun brings a well-rounded approach to training. Ready to start your fitness journey with Arjun?
                </Card.Text>
                <div>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1719139419~exp=1719143019~hmac=ee0acac23d8e3501586c8c6feee6be98de61f90f172dd8e0453e9ecd95afd17b&w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/premium-photo/whatsaap-icon-logo_895118-4059.jpg?w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                    <button style={{borderRadius:"50px",borderWidth:"0px",margin:"20px"}}><img src='https://img.freepik.com/premium-vector/gmail-logo-vector_986045-36.jpg?w=740' alt='imagelogo' width={40} style={{borderRadius:"50px"}}/></button>
                </div>
            </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default TrainerCard;