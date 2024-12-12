import "./Home.css"
function Home(){
    return(
        <div className="HomeContainer">
            <div>
                <img className="poster" src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Homeimage"/>
            </div>
            <div className="headingContainer">
                <h1 className="mainHeading"> Discover your </h1>
                <h1 className="mainHeading" style={{color:"red"}}>Strength !</h1>
                <button className="start">Get Started</button>
            </div>
        </div>
    )
}

export default Home;