import React from 'react';
import "./style/Section6.css"
function Section6() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Cartoons</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>Cartoon 1, Cartoon 2</td>
            <td>$9.99</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>Cartoon 1, Cartoon 2, Cartoon 3</td>
            <td>$19.99</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>Cartoon 1, Cartoon 2, Cartoon 3, Cartoon 4</td>
            <td>$29.99</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Section6;
