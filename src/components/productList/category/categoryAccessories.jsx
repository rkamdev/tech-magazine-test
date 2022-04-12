import React from "react";
import "./styles/categoryAccessories.scss";

const mock = [
  {
    "id": 31,
    "img": require("../../../assets/images/accessories_1.png"),
    "text":"nout_1"
  },
  {
    "id": 32,
    "img": require("../../../assets/images/accessories_2.png"),
    "text":"nout_2"
  },
  {
    "id": 33,
    "img": require("../../../assets/images/accessories_3.png"),
    "text":"nout_3"
  }
];

function CategoryAccessories(){
  return(
    <div className="categoryAccessories">
      <div className="container">
        <div className="access-cards">
          {
            mock.map((e) => 
              (<img 
                src={e.img} 
                width={350} 
                height={200} 
              />))
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryAccessories;