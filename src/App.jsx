import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="数字を入力" />
        <div className="multiplication">×</div>
        <input placeholder="数字を入力" />
        <button>計算</button>
      </div>
      <div className="result-area">
        <p className="result">結果</p>
        <p className="result-num">100</p>
      </div>
    </>
  );
};
