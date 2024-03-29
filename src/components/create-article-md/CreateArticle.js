/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { nanoid } from 'nanoid';
import PacmanLoader from 'react-spinners/PacmanLoader';
import CreateContainer from './CreateArticleContainer';
import useCreateArticle from '../../hooks/useCreateArticle';
import config from '../../config';

const override = css`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 3rem;
  margin-bottom: 6rem;
`;

const initialValues = {
  title: '',
  tag: '',
  license: 'CC BY',
};

const editorContentInit = `这是示例
## Waldon 新功能 **@v1.1.0**
- 📑 添加了Markdown支持
- 📷 增加了多种默认封面
- 😻 改进了一些细节
-  💡 修复了一些bug`;

const Create = () => {
  const [errorInfo, setErrorInfo] = useState('');
  const [successInfo, setSuccessInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [createArticle, result] = useCreateArticle();
  const [editorState, setEditorState] = useState(editorContentInit);
  const userId = localStorage.getItem('userId');
  const [license, setLicense] = useState('CC BY');
  const [cover, setCover] = useState('');
  const [articleId, setArticleId] = useState('');
  const history = useHistory();

  if (!userId) {
    return (
      <div className="col-item-3">
        <PacmanLoader color="#9B9B9B" loading css={override} size={50} />
      </div>
    );
  }

  useEffect(() => {
    if (result && result.data) {
      const tempId = result.data.createArticle.id;
      setArticleId(tempId);
      setTimeout(() => {
        setSuccessInfo('');
        history.push(`/article/${articleId}`);
      }, 3000);
    }
  }, [result]);

  const onSubmit = async (values) => {
    const {
      title, tag,
    } = values;

    setLoading(true);
    try {
      // get secure url from our server

      const variables = {
        title,
        content: JSON.stringify(editorState),
        license,
        tag,
        published: true,
        format: 'MD',
      };
      const res = await createArticle(variables);
      setSuccessInfo('Article created');

      setLoading(false);
    } catch (e) {
      setErrorInfo(e.message);
      setLoading(false);
      setTimeout(() => { setErrorInfo(''); }, 3000);
    }
  };

  return (
    <div>
      {/* <img
        src={cover}
        className="article-details-cover"
        width="100%"
        height={300}
        alt="gird item"
      /> */}
      <CreateContainer
        initialValues={initialValues}
        onSubmit={onSubmit}
        errorInfo={errorInfo}
        successInfo={successInfo}
        loading={loading}
        editorState={editorState}
        setEditorState={setEditorState}
        setLicense={setLicense}
      />
    </div>
  );
};

export default Create;
