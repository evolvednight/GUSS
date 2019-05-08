import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Page20 from "../components/Pages/Page_20";
import Crosswords from "../components/Games/Crossword";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <Page20 />
        <Crosswords />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
