import React from "react";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Cat from "../Assets/cat.jpg";
import s from "./App.module.scss";
import Card from "../Components/UI/Cards/Card";

const App = () => {

  const cats = [ // создаю фэйковые данные 
    {
      id: 1,
      title: "Cat 1",
      price: 10,
    },
    {
      id: 2,
      title: "Cat 2",
      price: 10,
    }, {
      id: 3,
      title: "Cat 3",
      price: 10,
    }, {
      id: 4,
      title: "Cat 4",
      price: 10,
    }, {
      id: 5,
      title: "Cat 5",
      price: 10,
    }
  ]


  return (
    <>
      <Header />
      <h1>Catalog</h1>
      {
        // обращаюсь к массиву и прохожусь по нему отрисовывая компонент Card 
        cats.map((cat) => // cat - это каждый элемент массива, а точнее обьект 
        (
          <Card Title={cat.title} price={cat.price} />
        )
        )
      }
      <Footer />
    </>
  );
};

export default App;
