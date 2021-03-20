import React from 'react';

const TopWebsites = () => {
  const website = [
    'https://unsplash.com/',
    'https://burst.shopify.com/',
    'https://kaboompics.com/',
    'https://gratisography.com/',
    'https://picography.co/',
    'https://www.pexels.com/zh-cn/',
    '......',
  ];

  return (
    <div>
      <div className="container-col-login">
        <div className="profile-item">
          <h1 className="header-bold">Top Free Stock Photos Website:</h1>
        </div>
        <ol className="website-link">
          {website.map((obj) => (
            <li key={obj}>
              <a href={obj} className="website-link">{obj}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TopWebsites;
