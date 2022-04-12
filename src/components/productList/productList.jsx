import React from "react";
import "./styles/productList.scss";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CategoryNoutbooks from "./category/categoryNoutbooks";
import CategoryTelephones from "./category/categoryTelephones";
import CategoryAccessories from './category/categoryAccessories';

function ProductList(){
  return(
    <div className="productList">
      <div className="container">
        <div className="category-name">
          <p><RadioButtonCheckedIcon /> Noutbooklar </p><hr />
        </div>
        <div className="categoryNoutbooks">
          <CategoryNoutbooks />
        </div>
        <div className="category-name">
          <p><RadioButtonCheckedIcon /> Telefonlar </p><hr />
        </div>
        <div className="telepphones">
          <CategoryTelephones />
        </div>
        <div className="category-name">
          <p><RadioButtonCheckedIcon /> Aksessuarlar </p><hr />
        </div>
        <div className="accessories">
          <CategoryAccessories />
        </div>
      </div>
    </div>
  )
}

export default ProductList;