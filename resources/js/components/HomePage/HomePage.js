import React, { useState } from 'react';
import About from '../About/About';
import Card from '../Card/Card';

const HomePage = props => {
  const [customers, _] = useState([
    {
      username: 'vlada21',
      message: 'Really satisfied with your product, help me organize my days easily.',
    },
    {
      username: 'emilija25',
      message: 'Really satisfied with your product, help me organize my days easily.',
    },
    {
      username: 'srdjan_15',
      message: 'Really satisfied with your product, help me organize my days easily.',
    }
  ]);
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="main-container-banner">
          <img src="./assets/macbook.png" alt="Calendar"/>
        </div>
        <div className="main-container-heading">
          <h1>Organize your days by adding every event in our simple calendar.</h1>
        </div>
      </div>
      <About />
      <div className="main-customers">
        <h3>Read what our customers say about us</h3>
        <div className="main-customers-container">
          {customers.map((customer, index) => {
            return <Card 
                      key={index} 
                      username={customer.username} 
                      message={customer.message} />
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage;