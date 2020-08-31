import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import styled from 'styled-components';
import '../index.css';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #228be6;
  border-bottom: 1px solid #228be6;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const SubTitle = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.5rem;
  color: #228be6;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Do Hyeon', sans-serif;
  color: #228be6;
  text-decoration: none;
`;

const Menu = styled.div`
  margin-top: 10px;
  background-color: #4dabf7;
`;

const Footer = styled.footer`
  padding: 1.5rem;
  border-top: 1px solid #228be6;
  text-align: center;
  color: #228be6;
`;

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  const today = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  return (
    <>
      <Header>
        <SubTitle>Since 2020.08.30.</SubTitle>
        <MainTitle>오늘의 뉴스</MainTitle>
        <SubTitle>
          {year}.{month + 1}.{date}.({week[day]})
        </SubTitle>
      </Header>
      <Menu>
        <Categories />
      </Menu>
      <NewsList category={category} />
      <Footer>© 2020 오늘의 뉴스 by 제이드 스튜디오</Footer>
    </>
  );
};

export default NewsPage;
