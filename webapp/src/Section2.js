import React from 'react';
import "./style/Section2.css"
import Image3 from "./Image3.jpg"
function Section2() {
  return (
    <section>
      <div className="image">
        <img src={Image3} alt="Image3.jpg" />
      </div>
      <div className="content">
        <h1>Lazy Boy</h1>
        <h2>Age:5+</h2>
        <p>Lazy Boy And His LifeStyle</p>
        <button>View</button>
      </div>
    </section>
  );
}

export default Section2;
