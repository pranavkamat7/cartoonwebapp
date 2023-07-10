import React from 'react';
import "./style/Section3.css"
import Image3 from "./Image3.jpg"
import Image2 from "./Image2.jpg"
import Image1 from "./style/Image1.jpg"
function Section3() {
  return (
    <section>
      <div className="column">
        <div className="card">
          <img src={Image1} alt="Image1.jpg" />
          <h3>Little Krishna</h3>
          <p>Real Life Stories Of Lord Krishna</p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src={Image2} alt="Image2.jpg" />
          <h3>Dog</h3>
          <p>Dog Who Can Talk</p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src={Image3} alt="Image3.jpg" />
          <h3>Lazy Boy</h3>
          <p>Lazy Boy And His Lifstyle</p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
