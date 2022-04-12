import React from "react";
import "./styles/categoryNoutbooks.scss";

const mock = [
  {
    "id": 11,
    "img": require("../../../assets/images/nout_1.png"),
    "text":"nout_1"
  },
  {
    "id": 12,
    "img": require("../../../assets/images/nout_2.png"),
    "text":"nout_2"
  },
  {
    "id": 13,
    "img": require("../../../assets/images/nout_3.png"),
    "text":"nout_3"
  }
];

function CategoryNoutbooks(){
  return(
    <div className="categoryNoutbook">
      <div className="container">
        <div className="nout-cards">
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

export default CategoryNoutbooks;