import React from 'react';
import "./style/Section1.css"
import Image2 from './Image2.jpg'
function Section1() {
  return (
    <section>
      <div className="content">
        <h1>Dog Cartoon</h1>
        <h2>Age:3+</h2>
        <p>A Dog With His Unique Skill Of Talking</p>
        <button>View</button>
      </div>
      <div className="image">
        <img src={Image2} alt='Image2.jpg' />
      </div>
    </section>
  );
}

export default Section1;
