/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Card } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import PacmanLoader from 'react-spinners/PacmanLoader';
import markdown from '../../img/article-type/markdown.svg';
import richText from '../../img/article-type/richText.svg';

const RICH_TEXT_COVER = richText;
const MARKDOWN_COVER = markdown;

const override = css`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 3rem;
  margin-bottom: 6rem;
`;

const breakpointColumnsObj = {
  default: 2,
  800: 2,
  500: 1,
};

const Create = () => {
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  if (!userId) {
    return (
      <div className="col-item-3">
        <PacmanLoader color="#9B9B9B" loading css={override} size={50} />
      </div>
    );
  }

  useEffect(() => {

  }, []);

  const allModes = [
    {
      title: 'Rich Text',
      path: 'article',
      mode: 'RTF',
      cover: RICH_TEXT_COVER,
    },
    {
      title: 'Markdown',
      path: 'article_md',
      mode: 'MARKDOWN',
      cover: MARKDOWN_COVER,
    },
  ];

  return (
    <div className="container-col-create">
      <div className="scrollmenu p-3">
        <h1 className="container-col-title">
          Create:
        </h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {allModes.map((mode) => (
            <Card key={mode.title}>
              <div
                className="view zoom overlay"
                onClick={() => { history.push(`/create/${mode.path}`); }}
                onKeyPress={() => history.push(`/create/${mode.path}`)}
                role="button"
                tabIndex="0"
              >
                <img
                  src={mode.cover}
                  className="mode-card-max-height"
                  alt="smaple"
                />
                <div className="mask flex-center rgba-blue-light white-text">
                  <i size="lg" className="bi bi-check-square" />
                </div>
              </div>
              <Card.Title>
                <div className="flex-center">
                  {mode.title}
                </div>
              </Card.Title>
            </Card>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Create;
