import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import "./cards.css";

function BasicExample() {
  return (
    <div className='cardscontainer'>
        <div>
            <Card style={{ width: '18rem',margin:"30px", backgroundColor:"black",color:"grey" }}>
                <Card.Body>
                <Card.Title style={{color:"gold",fontStyle:"italic",fontFamily:"serif",fontSize:"20px"}}>Elite</Card.Title>
                <Card.Text>
                <FiCheckCircle  style={{marginRight:"10px"}}/>
                Unlimited ELITE Gyms & At Centre Group Classes
                </Card.Text> <hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited Pro Gyms</Card.Text><hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited Smart workout plan</Card.Text><hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited home workouts </Card.Text><hr/>
                <Card.Text>  Starting at ₹916.0 / month</Card.Text><hr/>
                <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card style={{ width: '18rem',margin:"30px",backgroundColor:"black",color:"grey" }}>
                <Card.Body>
                <Card.Title style={{color:"white",fontStyle:"italic",fontFamily:"serif",fontSize:"20px"}}>Pro</Card.Title>
                <Card.Text>
                <FiCheckCircle  style={{marginRight:"10px"}}/>
                02 Sessions/ month ELITE Gyms & At Centre Group Classes
                </Card.Text> <hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited Pro Gyms</Card.Text><hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited Smart workout plan</Card.Text><hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited home workouts </Card.Text><hr/>
                <Card.Text>  Starting at ₹723.0 / month</Card.Text><hr/>
                <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card style={{ width: '18rem',margin:"30px",backgroundColor:"black",color:"grey" }}>
                <Card.Body>
                <Card.Title style={{color:"pink",fontStyle:"italic",fontFamily:"serif",fontSize:"20px"}}>Home</Card.Title>
                <Card.Text>
                <FiXCircle style={{marginRight:"10px"}} />
                Unlimited ELITE Gyms & At Centre Group Classes
                </Card.Text> <hr/>
                <Card.Text> <FiXCircle style={{marginRight:"10px"}} /> Unlimited Pro Gyms</Card.Text><hr/>
                <Card.Text> <FiXCircle style={{marginRight:"10px"}} /> Unlimited Smart workout plan</Card.Text><hr/>
                <Card.Text> <FiCheckCircle  style={{marginRight:"10px"}}/> Unlimited home workouts </Card.Text><hr/>
                <Card.Text> Starting at ₹102.0 / month</Card.Text><hr/>
                <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>

    </div>
  );
}

export default BasicExample;