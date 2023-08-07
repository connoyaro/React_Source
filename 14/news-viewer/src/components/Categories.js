import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  //categories라는 배열 안에 name과 text값이 들어가 있는 객체들을 넣어
  //한글로 된 카테고리와 실제 카테고리 값을 연결시켜 줌
  {
    name: 'all', //실제 카테고리 값
    text: '전체보기', //렌더링할 때 사용할 한글 카테고리
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
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({ onSelect, category }) => {
  //받아온 props
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'all' ? '/' : `/${c.name}`}
          //to 값이 '/'를 가리키고 있을 때는 exact값을 true로
          //이 값을 설정하지 않으면 다른 카테고리가 선택되었을 때도 전체보기 링크에 active스타일 적용
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
