import React from "react";
import styles from "./ProductLanding.css";

const ProductLanding = ({bgImage, title, subtitle, claro}) => {

  return (
    <section className="product-section" style={{backgroundImage: `url('${bgImage}')`, color: claro ? "white" : "black"}}>
      <div className="title">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <div className="buttons">
        <button className="btn1">Mostrar más</button>
        <button className="btn2">Solicitar cotización</button>
      </div>
    </section>
  );
};

export default ProductLanding;
