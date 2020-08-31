import React from 'react';
import styled from 'styled-components';
import defaultImage from '../image/default_image.jpeg';

const NewsItemBlock = styled.div`
  display: flex;
  float: left;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 2rem;
  transition: 0.5s;
  padding: 1rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .contents {
    h3 {
      margin: 0;
      a {
        color: #364fc7;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  @media (min-width: 720px) {
    width: 40%;
    height: 200px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  }
`;

const NewsItem = ({ article }) => {
  const { title, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage ? (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      ) : (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={defaultImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
