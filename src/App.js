// import logo from './logo.svg';
// eslint-disable-next-line
import { useState } from "react";
import "./App.css";

function App() {
  let post = "아무튼 블로그임";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);
  let [like, setLike] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>
      <button
        onClick={() => {
          let 글제목정렬 = [...글제목.sort()];
          글제목변경(글제목정렬);
        }}
      >
        정렬하기
      </button>
      
      <button
        onClick={() => {
          let 글제목사본 = [...글제목];
          글제목사본[0] = "여자 코트 추천";
          글제목변경(글제목사본);
        }}
      >
        여자코트추천
      </button>

      {글제목.map(function (data, i) {
        return (
          <div className="list" key={i}>
            <h5>
              {글제목[i]}{" "}
              <span
                onClick={() => {
                  let like2 = [...like];
                  like2[i] = like[i] + 1;
                  setLike(like2);
                }}
              >
                👍
              </span>{" "}
              {like[i]}
            </h5>
            <p>2022-09-19</p>
          </div>
        );
      })}

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;