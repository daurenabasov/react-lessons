import React from "react";
import Cat from "../../../Assets/cat.jpg";
import s from "../../../App/App.module.scss";

/**
 * 
 * @param {object} - в параметрах у компонента мы принимаем объект с данными (диструктуризируем пропсы - Title, price) 
 * @returns jsx форматированный компонент
 */


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
