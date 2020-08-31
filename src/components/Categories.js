import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: 0.5s;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

const Category = styled(NavLink)`
  display: block;
  padding: 1em;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  text-align: center;

  &.active {
    font-weight: 500;
    color: #ffd43b;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
