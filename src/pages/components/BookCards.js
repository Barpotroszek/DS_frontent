import React from "react";
import { Link } from "react-router-dom";

function Card({ key, img, href, title, dostepnosc, price }) {
  const elem = img ? <img src={img} className="img" alt="img"/> : <div className="img">książka</div>
  return (
    <Link to={href} key={key} className="card">
      {elem}
      
      <div className="wrapper ">
        <h3>{title}</h3>
        <span className="dostepnosc">{dostepnosc}</span>
        <span className="price">{price}</span>
      </div>
    </Link>
  );
}

export default function BookCards({ name, cards }) {
  const items = cards.map((item) => {
    return (
      <Card
        key={item.id}
        href={item.href}
        title={item.title}
        dostepnosc={item.dostepnosc}
        price={item.price}
        img={item.img}
      />
    );
  });
  return (
    <div
      key={name}
      className="books container-fluid d-flex justify-content-center"
    >
      {items}
    </div>
  );
}
