import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  //children props받아와서 사용
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default TodoTemplate;
