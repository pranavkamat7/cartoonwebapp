import React from 'react';
import "./style/Section5.css"
import cus1 from "./customer1.jpg"
import cus2 from "./customer2.jpg"
import cus3 from "./customer3.jpg"
function Section5() {
  return (
    <section>
      <div className="testimonial">
        <img src={cus1} alt="Customer1.jpg" />
        <h3>Customer 1</h3>
        <p>R=Good website to watch cartoons</p>
      </div>
      <div className="testimonial">
        <img src={cus2} alt="Customer2.jpg" />
        <h3>Customer 2</h3>
        <p>Loved the quality</p>
      </div>
      <div className="testimonial">
        <img src={cus3} alt="Customer3.jpg" />
        <h3>Customer 3</h3>
        <p>All cartoons are available</p>
      </div>
    </section>
  );
}

export default Section5;
