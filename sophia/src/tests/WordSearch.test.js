import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import WordSearch from "../components/Games/WordSearch";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <WordSearch />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
