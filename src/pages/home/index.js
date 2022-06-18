import React from "react";
import Cards from "../../Components/cards";
import { Container } from "../../Components/container";
import Head from "../../Components/head";
import * as style from "./style";

export function Home() {
  return (
    <Container>
      <Head path="Home" />
      <div>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div>charts</div>
      <div>
        <div>circle cahrts</div>
        <div>users</div>
      </div>
      <div>
        <div>todo</div>
        <div>caldendar</div>
      </div>
    </Container>
  );
}
