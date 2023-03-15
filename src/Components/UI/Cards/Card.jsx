import React from "react";
import Cat from "../../../Assets/cat.jpg";
import s from "../../../App/App.module.scss";

const Card = ({ Title, price }) => {
  return (
    <>
      <div className={s.item}>
        <img src={Cat} alt="" />
        <p className={s.title}>
            
            {Title}
            
            </p>
        <span className={s.price}>
            {price} $
            </span>
      </div>
    </>
  );
};

export default Card;
