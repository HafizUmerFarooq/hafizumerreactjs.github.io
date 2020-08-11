import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carasoule=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
 <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <Slider {...settings}>
                <div><img src="https://picsum.photos/1332/500"/></div>
                <div><img src="https://picsum.photos/1332/500.jpg"/></div>
                <div><img src="https://picsum.photos/1332/500.webp"/></div>
                <div><img src="https://picsum.photos/1332/500"/></div>
                <div><img src="https://picsum.photos/1332/500"/></div>
                <div><img src="https://picsum.photos/1332/500.jpg"/></div>
                <div><img src="https://picsum.photos/1332/500.webp"/></div>
            </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carasoule;