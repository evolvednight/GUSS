import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Help from "../components/Help";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Help />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
