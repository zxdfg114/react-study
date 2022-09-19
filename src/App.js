// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  // function 함수(){
  //   return 따봉 + 1;
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>
      <div className="list">
        <h5>{ 글제목[0] } <span onClick={따봉변경(1)}>🆗</span> {따봉} </h5>
        <p>2022-09-19</p>
      </div>
      <div className="list">
        <h5>{ 글제목[1] }</h5>
        <p>2022-09-19</p>
      </div>
      <div className="list">
        <h5>{ 글제목[2]}</h5>
        <p>2022-09-19</p>
      </div>
    </div>
  );
}

export default App;
