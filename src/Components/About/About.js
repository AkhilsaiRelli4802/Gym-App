import"./About.css";
function About(){
    return(
        <>
        <div className="aboutContainer">
            <div className="aboutdescContainer">
                <h1 style={{fontFamily:"cursive",color:"red"}}> About Us</h1>
            <p className="description">
                Welcome to Sprit Flow, your ultimate fitness destination! Since 2023, we have been dedicated to providing a welcoming and supportive environment for everyone, from beginners to athletes. Our state-of-the-art facilities include the latest cardio and strength training equipment, spacious workout areas, group classes such as yoga and HIIT, and relaxation zones like saunas and steam rooms. Our certified trainers offer personalized guidance and expert nutritional advice to help you achieve your fitness goals. Join our friendly community and participate in regular events, workshops, and challenges to keep your fitness journey exciting. We prioritize cleanliness and safety with regular sanitation of all equipment and facilities. Visit us at Garividi mainroad or call 9381161353. Experience the difference at Sprit Flow – where your fitness journey begins!
            </p>
            </div>
            <div>
                <img className="aboutimage" src="https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Aboutimage"/>
            </div>
        </div>
        </>
    )
}
export default About;