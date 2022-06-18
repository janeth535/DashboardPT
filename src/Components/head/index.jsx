import React from "react";
import * as style from "./styles";

export default function Head({ path }) {
  return (
    <style.HeadContainer>
      <style.HeadLeft>
        <h1>Seja bem vindo, JQ</h1>
      </style.HeadLeft>
      <style.HeadRight>
        <h4>Dashboard</h4>/<span>{path}</span>
      </style.HeadRight>
    </style.HeadContainer>
  );
}
