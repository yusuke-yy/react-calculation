import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="数字を入力" />
        ×
        <input placeholder="数字を入力" />
        <button>計算</button>
      </div>
      <div>
        <p>結果</p>
      </div>
    </>
  );
};
