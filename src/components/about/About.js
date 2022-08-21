/* eslint-disable max-len */
import React from 'react';
import { Card } from 'react-bootstrap';
import AboutComponent from './AboutComponent';
import AboutComponentRow from './AboutComponentRow';
import MyImage from './MyImage';
import AboutImg1 from '../../img/about/aboutImg1.jpg';
import AboutImg2 from '../../img/about/aboutImg2.jpg';
import AboutImgArticle from '../../img/about/aboutImgArticle.jpg';
import AboutImgCollect from '../../img/about/aboutImgCollect.jpg';
import AboutImgEdit from '../../img/about/aboutImgEdit.jpg';

const img0 = { srcTiny: AboutImg1, srcSmall: AboutImg1, srcLarge: AboutImg1 };
const img1 = AboutImgEdit;
const img2 = AboutImg2;
const img3 = AboutImgArticle;
const img4 = AboutImgCollect;

const About = () => {
  const msgToShow = [
    {
      title: 'Outstanding lightweight blog platform',
      subtitle1: 'Helps you publish and manage your work more easily',
      subtitle2: 'and connect with your audience',
      intro: 'Waldon - Made for creators!',
      imgFirst: true,
      img: { srcTiny: img1, srcSmall: img1, srcLarge: img1 },
    },
    {
      title: 'What you can do with Waldon?',
      imgFirst: false,
      img: { srcTiny: img2, srcSmall: img2, srcLarge: img2 },
      msgList: [
        { icon: 'bi bi-pencil icon-check', msg: 'Upload, manage and publish your work with rich protocols' },
        { icon: 'bi bi-search icon-check', msg: 'Discover and follow favorite creators and get instant updates' },
        { icon: 'bi bi-heart icon-check', msg: 'Discover, search and bookmark great articles' },
        { icon: 'bi bi-image icon-check', msg: 'Add high quality images from rich sources to your articles for free' },
        { icon: 'bi bi-plus-square icon-check', msg: 'More advanced features are incoming……' },
      ],
    },
    {
      title: 'Who need Waldon?',
      imgFirst: true,
      img: { srcTiny: img3, srcSmall: img3, srcLarge: img3 },
      msgList: [
        { icon: 'bi bi-palette icon-check', msg: 'Creators' },
        { icon: 'bi bi-star icon-check', msg: 'Science popularizers' },
        { icon: 'bi bi-pencil icon-check', msg: 'Teachers' },
        { icon: 'bi bi-emoji-sunglasses icon-check', msg: '...And you' },
      ],
    },
    {
      title: 'Why choose Waldon?',
      imgFirst: false,
      img: { srcTiny: img4, srcSmall: img4, srcLarge: img4 },
      msgList: [
        { icon: 'bi bi-check2 icon-check', msg: 'Easily and quickly publish and manage your work with multiple protocols' },
        { icon: 'bi bi-check2 icon-check', msg: 'Discover great articles and creators' },
        { icon: 'bi bi-check2 icon-check', msg: 'Support creative freedom' },
        { icon: 'bi bi-check2 icon-check', msg: 'Encourage creativity, inspire and enhance creativity' },
      ],
    },
  ];
  return (
    <div>
      <img
        src={img0.srcLarge}
        className="article-details-cover"
        width="100%"
        alt="gird item"
      />
      <div className="container-col">
        <div className="col-item-4">
          <h1 className="header-bold">About Waldon</h1>
        </div>
        <Card.Link href="/about/zh" className="col-item-3">中文</Card.Link>
      </div>
      <div className="container-col-about">
        <h1 className="subheader">{msgToShow[0].intro}</h1>
      </div>
      <div className="container-col-about">
        <h1 className="subheader">{msgToShow[0].title}</h1>
        <h3 className="subheader2">
          {msgToShow[0].subtitle1}
        </h3>
        <h3 className="subheader2">
          {msgToShow[0].subtitle2}
        </h3>
      </div>
      <AboutComponent msgToShow={msgToShow[1]} />
      <AboutComponentRow msgToShow={msgToShow[2]} />
      <AboutComponent msgToShow={msgToShow[3]} />
      <div className="p-3 container-about-row">
        <MyImage image={msgToShow[0].img} />
      </div>
      <div className="container-col">
        <div className="col-item-3 licence-msg text-1rem">
          <p className="margin-tb-5rem">
            If you have any questions or suggestions that might make the Waldon experience even better, please let us know! You can get in touch with us at philoart42@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
