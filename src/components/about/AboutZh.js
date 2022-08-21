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

const AboutZh = () => {
  const msgToShow = [
    {
      title: '出色的轻量级博客平台',
      subtitle1: '帮助你更便捷地发布和管理作品，并和听众建立连接',
      intro: 'Waldon - 为创作者而生！',
      imgFirst: true,
      img: { srcTiny: img1, srcSmall: img1, srcLarge: img1 },
    },
    {
      title: 'Waldon 可以做什么?',
      imgFirst: false,
      img: { srcTiny: img2, srcSmall: img2, srcLarge: img2 },
      msgList: [
        { icon: 'bi bi-pencil icon-check', msg: '编辑、管理并且以丰富的协议发布你的作品' },
        { icon: 'bi bi-search icon-check', msg: '发现和关注喜欢的创作者，获取即时动态' },
        { icon: 'bi bi-heart icon-check', msg: '发现、搜索和收藏高质量的文章' },
        { icon: 'bi bi-image icon-check', msg: '为文章添加丰富来源的免费且高质量的配图' },
        { icon: 'bi bi-plus-square icon-check', msg: '更多高级功能，敬请期待……' },
      ],
    },
    {
      title: '谁需要 Waldon?',
      imgFirst: true,
      img: { srcTiny: img3, srcSmall: img3, srcLarge: img3 },
      msgList: [
        { icon: 'bi bi-palette icon-check', msg: '创作者' },
        { icon: 'bi bi-star icon-check', msg: '科普人员' },
        { icon: 'bi bi-pencil icon-check', msg: '学生教师' },
        { icon: 'bi bi-emoji-sunglasses icon-check', msg: '...还有你' },
      ],
    },
    {
      title: '为什么选择 Waldon?',
      imgFirst: false,
      img: { srcTiny: img4, srcSmall: img4, srcLarge: img4 },
      msgList: [
        { icon: 'bi bi-check2 icon-check', msg: '方便快捷地以多种协议发布和管理你的作品' },
        { icon: 'bi bi-check2 icon-check', msg: '发现更多优秀的文章和创作者' },
        { icon: 'bi bi-check2 icon-check', msg: '支持创作自由' },
        { icon: 'bi bi-check2 icon-check', msg: '鼓励创作、激发灵感和提升创造力' },
      ],
    },
  ];
  return (
    <div>
      <img
        src={img0.srcLarge}
        className="article-details-cover"
        width="100%"
        height={550}
        alt="gird item"
      />
      <div className="container-col">
        <div className="col-item-4">
          <h1 className="header-bold">关于 Waldon</h1>
        </div>
        <Card.Link href="/about" className="col-item-3">English</Card.Link>
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
      <div className="container-col-login">
        <div className="col-item-3 licence-msg text-1rem">
          <p>
            如果你有任何疑问或帮助 Waldon 实现更好的体验的改进建议，可以发送邮件到 philoart42@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutZh;
