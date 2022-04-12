import React from "react";
import "./styles/categoryTelephones.scss";

const mock = [
  {
    "id": 21,
    "img": require("../../../assets/images/phone_1.png"),
    "text":"nout_1"
  },
  {
    "id": 22,
    "img": require("../../../assets/images/phone_2.png"),
    "text":"nout_2"
  },
  {
    "id": 23,
    "img": require("../../../assets/images/phone_3.png"),
    "text":"nout_3"
  }
];

function CategoryTelephones(){
  return(
    <div className="categoryTelephones">
      <div className="container">
        <div className="phone-cards">
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

export default CategoryTelephones;