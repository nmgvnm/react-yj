import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name : "이윤진",
    comment : "안녕하세요. 윤진이에오",
  },
  {
    name : "최원종",
    comment : "안녕하세요. 윤진이 남자친구에오",
  },
  {
    name : "신성화",
    comment : "안녕하세요. 윤진이 엄마에오",
  },
];

function CommentList(props) {
  return (
    <div>
      {/* <Comment name = {"이윤진"} comment={"안녕하세요. 윤진이에오"}/>
      <Comment name = {"Lee yoon jin"} comment={"리액트 배우는 중이에오"}/> */}
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  );
} 

export default CommentList;