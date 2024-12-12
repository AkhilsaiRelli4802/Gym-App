import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container" style={{margin:"20px"}}>
      <Slider {...settings}>
        <div>
          <img src="https://img.freepik.com/free-photo/3d-rendering-modern-loft-gym-fitness_105762-2020.jpg?t=st=1719144873~exp=1719148473~hmac=77055077517397e63c1f39a3e33f938a40320efc492b0b28d30cee22146f7436&w=826" height={280} alt="gymslider"/>
        </div>
        <div>
        <img src="https://img.freepik.com/premium-photo/gym-with-lot-equipment-it_662214-439869.jpg?w=996" height={280} alt="gymslider"/>
        </div>
        <div>
        <img src="https://img.freepik.com/premium-photo/young-muscular-man-doing-pushup-exercise-holding-girl-joint-training-group-lessons-teambuilding-romance_136403-12130.jpg?w=826" height={280} alt="gymslider"/>
        </div>
        <div>
        <img src="https://img.freepik.com/free-photo/young-muscular-athlete-practicing-gym-with-weights_155003-35492.jpg?t=st=1719145566~exp=1719149166~hmac=49e139263a3b245d2767f806b46cea00056c2eaa9e136c22af5530403b1d9bba&w=826" height={280} alt="gymslider"/>
        </div>
        <div>
        <img src="https://img.freepik.com/free-photo/young-muscular-caucasian-woman-practicing-gym-with-equipment_155003-44810.jpg?t=st=1719145496~exp=1719149096~hmac=bfddc7629e06ced241a2a4249d715eac5a661f5ef9a5358e6e8af8a40bd0f93d&w=826" height={280} alt="gymslider"/>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
