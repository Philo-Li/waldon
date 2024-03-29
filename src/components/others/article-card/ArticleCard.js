import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { format } from 'date-fns';
import SaveToCollectionsModal from './SaveToCollectionsModal';
import EditModal from './edit-article-meta/EditModal';
import DropdownButton from '../button/profile-page-article-btn/DropdownButton';
import DeleteConfirmModal from './DeleteConfirmModal';
import '../../../mdb.css';

const ArticleCard = ({ article }) => {
  if (!article) return null;
  const history = useHistory();
  const [showCollectModal, setShowCollectModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showEditModal, setShowEditModal] = useState(false);

  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
  const thumb = article.thumb || 'https://cdn.philoart.io/b/700x700/ejt2Vbza56UViZTf2vEHY.jpg';

  const bgColor = article.color || '#84B0B3';

  const mystyle = {
    backgroundColor: bgColor,
  };

  const Placeholder = () => (
    <div style={mystyle}>
      <a href={`/article/${article.id}`}>
        <img
          src={thumb}
          className="lazyload-img"
          width="100%"
          alt="gird item"
        />
      </a>
    </div>
  );

  const openCollectModal = async () => {
    if (!userId) {
      history.push('/signin');
    } else {
      setShowCollectModal(true);
    }
  };

  const redirectToEditPage = async () => {
    if (article.format === 'TXT') {
      history.push(`/edit/${article.id}`);
    } else if (article.format === 'MD') {
      history.push(`/edit_md/${article.id}`);
    }
  };

  const publishedDate = format(new Date(article.publishedAt), 'PP');
  // console.log('article', article, publishedDate, article.publishedAt);
  const initProfileImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  const { profileImage } = article.user;

  return (
    <div className="grid-item">
      <div className="p-3">
        <Card key={article.id}>
          <LazyLoad
            height={300}
            offset={[-100, 0]}
            debounce={500}
            once
            placeholder={<Placeholder />}
          >
            <div className="article-card overlay">
              <a href={`/article/${article.id}`}>
                <img
                  className="article-card-cover"
                  src={thumb}
                  width="100%"
                  height={200}
                  alt="gird item"
                />
              </a>
            </div>
          </LazyLoad>
          <Card.Title>
            <div className="article-card">
              <a href={`/article/${article.id}`}>
                <div className="article-card-title">
                  {article.title}
                </div>
                <div className="article-card-summary">
                  {article.summary}
                </div>
              </a>
            </div>
            <div className="container-row-primary">
              <a href={`/@${article.user.username}`}>
                <div className="">
                  <img src={profileImage || initProfileImage} alt="user avatar" className="article-card-author article-card-author-avatar" />
                </div>
              </a>
              <a href={`/@${article.user.username}`}>
                <div className="article-card-author-name">{`${article.user.firstName} ${article.user.lastName || ''}`}</div>
              </a>
              <div className="article-card-date">{publishedDate}</div>
            </div>
            <div className="container-article-card-bookmark">
              <div className="article-card-bookmark-btn-end">
                {userId && (
                <SaveToCollectionsModal
                  article={article}
                  showCollectModal={showCollectModal}
                  setShowCollectModal={setShowCollectModal}
                />
                )}
                <button
                  type="button"
                  className="article-card-btn-bookmark article-card-btn-item"
                  onClick={() => openCollectModal()}
                >
                  <div className="">
                    {!article.isCollected && (<i className={article.isCollected ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'} />)}
                    {article.isCollected && (
                      <div className="yellow-icon">
                        <i className={article.isCollected ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'} />
                      </div>
                    )}
                  </div>
                </button>
              </div>
              <div className="article-card-btn-bookmark article-card-btn-item article-card-bookmark-btn-end">
                {username && article.user.username === username && (
                  <DropdownButton
                    setShowEditModal={setShowEditModal}
                    redirectToEditPage={redirectToEditPage}
                    setShowDeleteModal={setShowDeleteModal}
                  />
                )}
              </div>
            </div>
            <EditModal
              articleToShow={article}
              // setArticleToShow={setArticleToShow}
              showEditModal={showEditModal}
              setShowEditModal={setShowEditModal}
            />
            <DeleteConfirmModal
              id={article.id}
              username={username}
              itemType="Article"
              showDeleteModal={showDeleteModal}
              setShowDeleteModal={setShowDeleteModal}
            />
          </Card.Title>
        </Card>
      </div>
    </div>
  );
};

export default ArticleCard;
