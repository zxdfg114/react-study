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
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

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
            <h5
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
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
            <button
              key={i}
              className="deleteBtn"
              onClick={(e) => {
                let _글제목 = [...글제목]; //1
                _글제목.splice(i, 1); //2
                글제목변경(_글제목); //3
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <form
        id="post"
        name="post"
        onSubmit={function (e) {
          let 글제목사본 = [...글제목];
          let likeCopy = [...like];
          e.preventDefault();
          const input = e.target.querySelector("input");
          입력값 = 글제목사본.push(input.value.toString());
          likeCopy.push(0);
          setLike(likeCopy);
          글제목변경(글제목사본);
          input.value = "";
        }}
      >
        <input type="text" required />
        <button type="submit">POST</button>
      </form>

      {modal === true ? (
        <Modal
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
          setTitle={setTitle}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  let 글제목copy = [...props.글제목];
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default App;
