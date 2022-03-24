import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Tabs, Tab } from 'react-bootstrap';
import UserArticles from './UserArticles';
import UserCollections from './UserCollections';
import UserLikes from './UserLikes';
import useUser from '../../hooks/useUser';

const initProfileImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const Profile = () => {
  const [key, setKey] = useState('articles');
  const [profileImage, setProfileImage] = useState(initProfileImage);
  const [follow, setFollow] = useState(false);
  const [userNow, setUserNow] = useState();

  let { username } = useParams();
  username = username.substr(1, username.length - 1);

  const { user } = useUser({ username });

  useEffect(() => {
    if (user) {
      setUserNow(user);
    }
  }, [user]);

  const handleFollowUser = async () => {
    setFollow(!follow);
  };
  return (
    <div className="p-3">
      <div className="container-profile">
        <div className="profile-item">
          <Image src={profileImage} width={100} height={100} magin={10} roundedCircle />
        </div>
        <div className="profile-item">
          <h1>{username}</h1>
        </div>
      </div>
      <div className="container-profile">
        <div className="profile-item">
          {`${userNow ? userNow.articleCount : 0} articles`}
        </div>
        {/* <div className="profile-item">
          {`${userNow ? userNow.followingCount : 0} followings`}
        </div> */}
        <div className="profile-item">
          {`${userNow ? userNow.followerCount : 0} followers`}
        </div>
        <div className="profile-item">
          {follow && (
            <button className="button-unfollow" type="button" onClick={handleFollowUser}>
              Unfollow
            </button>
          )}
          {!follow && (
            <button className="button-follow" type="button" onClick={handleFollowUser}>
              Follow
            </button>
          )}
        </div>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="articles" title="Articles">
          <UserArticles username={username} setProfileImage={setProfileImage} />
        </Tab>
        <Tab eventKey="collections" title="Collections">
          <UserCollections username={username} />
        </Tab>
        <Tab eventKey="likes" title="Likes">
          <UserLikes username={username} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
