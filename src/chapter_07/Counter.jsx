import React, { useEffect } from "react";
import { useState } from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding : 8,
    fontSize : 22,
    fontWeight : 600
  }
}

function Counter(props) {
  // const [ 변수명, set 함수명 ] = useState(초깃값);

  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
  // useEffect(이펙트 함수, 의존성 배열)
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트 합니다.
      document.title = `총 ${count}번 클릭했습니다.`;
  });

  return (
    <div style={styles.wrapper}>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={()=> setCount(count + 1)}>
        클릭
      </button>
    </div>
  )
}

export default Counter;