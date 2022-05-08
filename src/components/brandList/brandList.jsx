import React from "react";
import "./styles/brandList.scss";
import AliceCarousel from "react-alice-carousel";

const mock = [
  {
    "id": 1,
    "img": require("../../assets/images/laptop.png"),
    "text": "laptop"
  },
  {
    "id": 2,
    "img": require("../../assets/images/telephone.png"),
    "text": "telephone"
  },
  {
    "id": 3,
    "img": require("../../assets/images/accessorie.png"),
    "text": "accessorie"
  }
];

function BrandList(){
  const items = mock.map((e) => (<img src={e.img} width={600} height={300} />))

  return(
    <div className="brandList">
      <div className="container">
        <div className="card">
          <div className="viewCard">
            <a href="#">Ko'rib chiqish&rarr;</a>
          </div>
          <AliceCarousel
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableButtonsControls
            mouseTracking
            items={items}
          />
        </div>
        <div className="advertisement">
          <a href="#">Advertisment</a>
        </div>
      </div>
    </div>
  )
}

export default BrandList;
