/* eslint-disable max-len */
import React from 'react';
import {
  Image, Card,
} from 'react-bootstrap';

const AboutZh = () => {
  const img1 = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1416&q=80';

  return (
    <div>
      <div className="container-col-about">
        <div className="col-item-4">
          <h1 className="header-bold">Philo</h1>
        </div>
        <Card.Link href="/about" className="col-item-3">English</Card.Link>
        <div className="container-profile">
          <div className="profile-item">
            <Image src={img1} width={150} height={150} magin={20} roundedCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutZh;
