import React from 'react';
import styled from 'styled-components';

const LoadingBlock = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 100px;
  text-align: center;
`;

const DotBlock = styled.div``;

const Dot = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 50%;
  background: blue;
  animation: loading 1.3s linear infinite;

  &:nth-child(1) {
    animation-delay: 0s;
    background-color: #a5d8ff;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
    background-color: #4dabf7;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
    background-color: #228be6;
  }

  @keyframes loading {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`;

const Message = styled.div`
  color: #228be6;
  margin-top: 20px;
`;

const Loading = () => {
  return (
    <LoadingBlock>
      <DotBlock>
        <Dot />
        <Dot />
        <Dot />
      </DotBlock>
      <Message>새로운 뉴스를 로딩중입니다</Message>
    </LoadingBlock>
  );
};

export default Loading;
